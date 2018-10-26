import test from 'ava'
import parseExpireDate from '../src/parseExpireDate'

test('parseExpireDate', (t) => {
  const defaultExp = parseExpireDate()
  const defaultTime = new Date(new Date().getTime() + (1000*60)).toUTCString()

  const twentyExp = parseExpireDate('20 minutes')
  const twentyTime = new Date(new Date().getTime() + (1000*60*20)).toUTCString()

  const yearExp = parseExpireDate('2 years')
  const yearTime = new Date(new Date().getTime() + (1000*60*60*24*365*2)).toUTCString()

  t.is(defaultExp, defaultTime)
  t.is(twentyExp, twentyTime)
  t.is(yearExp, yearTime)
})
