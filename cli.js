#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const root = './src'

const [,, ...args] = process.argv

const [name, ...input] = args

const categoryDirs = fs.readdirSync(root)
const categoryPath = categoryDirs.find(dir => fs.readdirSync(path.join(root, dir)).includes(name))

if (categoryPath) {
  const algPath = path.join(root, categoryPath, name)
  const alg = require(`./${algPath}`)
  console.log(alg(...input))
}
