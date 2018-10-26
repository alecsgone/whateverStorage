import test from 'ava'
import parseTimeUnit from '../src/parseTimeUnit'

test('parseTimeUnit', (t) => {
  const defaultUnit = parseTimeUnit()
  const defaultError = parseTimeUnit('fasdfasefa')
  const oneHour = parseTimeUnit('hour')
  const oneDay = parseTimeUnit('day')
  const oneWeek = parseTimeUnit('week')
  const oneMonth = parseTimeUnit('Months')
  const oneYear = parseTimeUnit('years')

  t.is(defaultUnit, 1000*60, 'minute')
  t.is(defaultError, 1000*60, 'minute')
  t.is(oneHour, 1000*60*60, 'hour')
  t.is(oneDay, 1000*60*60*24, 'day')
  t.is(oneWeek, 1000*60*60*24*7, 'week')
  t.is(oneMonth, 1000*60*60*24*30, 'months')
  t.is(oneYear, 1000*60*60*24*365, 'years')
})
