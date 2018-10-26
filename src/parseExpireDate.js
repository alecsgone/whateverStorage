import parseTimeUnit from './parseTimeUnit'

function parseExpireDate(expires = '1 minute') {
  const byWords = expires.split(' ')
  const [times, unit] = byWords
  const duration = times * parseTimeUnit(unit)
  const date = new Date()

  date.setTime(date.getTime() + duration)

  return date.toUTCString()
}

export default parseExpireDate
