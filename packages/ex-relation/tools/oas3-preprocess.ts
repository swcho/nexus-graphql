
import program = require('commander');
import Path = require('path');
import * as JsYaml from 'js-yaml';
import { readFileSync, writeFileSync } from 'fs';
import { OpenAPIObject, PathItemObject } from 'openapi3-ts';
import Converter = require('api-spec-converter');
 
program
  .version('0.1.0')
  .option('-i, --input <input path>', 'Input oas3 file path (json, yaml)')
  .option('-o, --output <input path>', 'Output path')
  .parse(process.argv);

console.log('preprocess')

const {
  input,
  output,
} = program;

if (!input) {
  console.error('input required');
  process.exit(1);
}

if (!output) {
  console.error('output required');
  process.exit(1);
}

const inputStr = readFileSync(input).toString();

let oas3str: string;
let oas3Json: OpenAPIObject;
if (['.yaml', '.yml'].indexOf(Path.extname(input)) !== -1) {
  try {
    oas3Json = JsYaml.load(inputStr);
  } catch (e) {
    console.error('Yaml parse error');
    process.exit(1);
  }
}

if (!oas3Json) {
  try {
    oas3Json = JSON.parse(inputStr);
  } catch(e) {
    console.error(inputStr);
    process.exit(1)
  }
}

const refineSpec = (obj: OpenAPIObject) => {
  const paths = Object.keys(obj.paths);
  console.log(`paths: ${paths.length}`)
  paths.forEach((path) => {
    const pathObject = obj.paths[path];
    const methods = Object.keys(pathObject);
    console.log(`${path}`)
    methods.forEach((method) => {
      const config = pathObject[method];
      console.log(`  ${method}`)
      config.parameters.forEach((param) => {
        const {
          name,
          type,
          format,
        } = param;
        console.log(`    ${name} ${type} ${format}`)
      })
    })
  })
}

if (oas3Json.swagger === '2.0') {
  console.log('swagger 2.0 detected')
  Converter.convert({
    from: 'swagger_2',
    to: 'openapi_3',
    source: oas3Json,
  }, function(err, converted) {
    // refineSpec(converted.spec);
    oas3str = converted.stringify();
    // For yaml and/or OpenApi field order output replace above line
    // with an options object like below
    //   var  options = {syntax: 'yaml', order: 'openapi'}
    //   console.log(converted.stringify(options));
    writeFileSync(output, oas3str);
  })
} else {
}
