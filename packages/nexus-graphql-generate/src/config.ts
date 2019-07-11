import * as fs from 'fs'
import * as path from 'path'

export function findRootDirectory(): string {
  const cwd = process.cwd()
  const tsConfig = findConfigFile(cwd, 'tsconfig.json')

  if (tsConfig) {
    return path.dirname(tsConfig)
  }

  const packageJson = findConfigFile(cwd, 'package.json')

  if (packageJson) {
    return path.dirname(packageJson)
  }

  return cwd
}

function findConfigFile(
  searchPath: string,
  configName = 'package.json',
): string | undefined {
  return forEachAncestorDirectory(searchPath, ancestor => {
    const fileName = path.join(ancestor, configName)
    return fs.existsSync(fileName) ? fileName : undefined
  })
}

/** Calls `callback` on `directory` and every ancestor directory it has, returning the first defined result. */
function forEachAncestorDirectory<T>(
  directory: string,
  callback: (directory: string) => T | undefined,
): T | undefined {
  while (true) {
    const result = callback(directory)
    if (result !== undefined) {
      return result
    }

    const parentPath = path.dirname(directory)
    if (parentPath === directory) {
      return undefined
    }

    directory = parentPath
  }
}

export function getImportPathRelativeToOutput(
  importPath: string,
  outputDir: string,
): string {
  let relativePath = path.relative(path.dirname(outputDir), importPath)

  if (!relativePath.startsWith('.')) {
    relativePath = './' + relativePath
  }

  // remove .ts or .js file extension
  relativePath = relativePath.replace(/\.(ts|js)$/, '')

  // remove /index
  relativePath = relativePath.replace(/\/index$/, '')

  // replace \ with /
  relativePath = relativePath.replace(/\\/g, '/')

  return relativePath
}
