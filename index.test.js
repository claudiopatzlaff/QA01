const test = require('tape')
const index = require('./index')

test('teste 1', (t) => {
    t.assert(index.aplicarDesconto(10,5) === 5,
    "descontou corretamente")
    t.end()
})


test('teste2', (t) => {
    t.assert(index.aplicarDesconto(5,10) === 0,
    "descontou corretamente")
    t.end()
})


test('teste3', (t) => {
    t.assert(index.aplicarDesconto(8,2) === 6,
    "descontou corretamente")
    t.end()
})

test('teste4', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 6,
    "descontou corretamente")
    t.end()
})

test('teste5', (t) => {
    t.assert(index.aplicarDesconto(9,2) === 7,
    "descontou corretamente")
    t.end()
})