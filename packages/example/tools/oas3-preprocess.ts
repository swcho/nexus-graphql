
import program = require('commander');
import Path = require('path');
import * as JsYaml from 'js-yaml';
import { readFileSync } from 'fs';
import { OpenAPIObject } from 'openapi3-ts';
 
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

const paths = Object.keys(oas3Json.paths);

console.log(`paths: ${paths}`)
