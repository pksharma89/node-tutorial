const { readFileSync, writeFileSync } = require('fs')

const sample = readFileSync('./content/sample.txt', 'utf8')
const first = readFileSync('./content/first.txt', 'utf8')

console.log(sample, first)

writeFileSync(
  './content/result-sync.txt',
  `${sample}, ${first} Here is the result: `,
  { flag: 'a' }
)
