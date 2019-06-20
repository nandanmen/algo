#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const util = require('util')
const yargs = require('yargs')

const root = './src'

const { argv } = yargs
  .option('category', { alias: 'c' })
  .demandOption('category')

const { _, category } = argv

const availableCategories = fs.readdirSync(root)
const categoryDir = category

if (!availableCategories.includes(category)) {
  fs.mkdirSync(path.join(root, category))
}

const mkdir = util.promisify(fs.mkdir)

_.forEach(problemName => {
  const pathToProblemDir = path.join(root, categoryDir, problemName)
  mkdir(pathToProblemDir)
    .then(() => {
      fs.writeFile(
        path.join(pathToProblemDir, 'README.md'),
        `# ${problemName}`,
        'utf-8',
        () => console.log(`created ${problemName}/README.md`)
      )
      fs.writeFile(path.join(pathToProblemDir, 'index.js'), '', 'utf-8', () =>
        console.log(`created ${problemName}/index.js`)
      )
      fs.writeFile(
        path.join(pathToProblemDir, `${problemName}.test.js`),
        `describe('${problemName}', () => {})`,
        'utf-8',
        () => console.log(`created ${problemName}/${problemName}.test.js`)
      )
    })
    .catch(err => console.error(err))
})
