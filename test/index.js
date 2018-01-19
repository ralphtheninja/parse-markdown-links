const test = require('tape')
const fs = require('fs')
const path = require('path')
const parse = require('..')

test('parses links correctly - contrived example', t => {
  const expected = [
    'https://example.com/link1',
    'https://example.com/link2',
    'https://example.com/link3',
    'https://example.com/link4',
    'link5',
    'https://example.com/link6',
    'https://example.com/link7',
    'https://example.com/link8',
    'link9',
    'link10'
  ]
  const text = fs.readFileSync(path.join(__dirname, 'file.md'), 'utf8')
  t.same(parse(text), expected, 'links are correct')
  t.end()
})

test('parses links correctly - this README', t => {
  const expected = [
    'https://img.shields.io/node/v/parse-markdown-links.svg',
    'https://travis-ci.org/ralphtheninja/parse-markdown-links',
    'https://travis-ci.org/ralphtheninja/parse-markdown-links.svg?branch=master',
    'https://standardjs.com',
    'https://img.shields.io/badge/code_style-standard-brightgreen.svg',
    'https://github.com/jonschlinkert/remarkable'
  ]
  const text = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')
  t.same(parse(text), expected, 'links are correct')
  t.end()
})
