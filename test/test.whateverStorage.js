import test from 'ava'
import db from '../src/whateverStorage'

test.beforeEach(() => {
  db.local.clear()
})

test('whateverStorage:setItem:getItem', (t) => {
  db.local.setItem('testString', 'test')
  db.local.setItem('testObj', { key: 'value' })

  const stringResult = db.local.getItem('testString')
  const objResult = db.local.getItem('testObj')

  t.is(stringResult, 'test', 'Can set and get strings')
  t.deepEqual(objResult, { key: 'value' }, 'Can set and get strings')
})

test('whateverStorage:removeItem', (t) => {
  db.local.setItem('testString', 'test')

  db.local.removeItem('testString')
  const stringResult = db.local.getItem('testString')

  t.is(stringResult, null, 'Can remove items')
})

test('whateverStorage:clear', (t) => {
  db.local.setItem('testString1', 'test')
  db.local.setItem('testString2', 'test')
  db.local.setItem('testString3', 'test')

  db.local.clear()

  const stringResult1 = db.local.getItem('testString1')
  const stringResult2 = db.local.getItem('testString2')
  const stringResult3 = db.local.getItem('testString3')

  t.is(stringResult1, null, 'Clear works!')
  t.is(stringResult2, null, 'Clear works!')
  t.is(stringResult3, null, 'Clear works!')
})

test('whateverStorage:key', (t) => {
  db.local.setItem('testString', 'test')

  const key = db.local.key(0)

  t.is(key, 'testString', 'number returns key on that position')
})

test('whateverStorage:cookie:setItem', (t) => {
  db.cookie.setItem('testc', 'cookie test', {domain: 'x'})
  const value = db.cookie.getItem('testc')

  t.is(value, 'cookie test')
})
