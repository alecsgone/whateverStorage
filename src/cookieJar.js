import window from 'global/window'
import document from 'global/document'

function parseUnit(unit = '') {
  // remove the s on plural time units e.g. minute-s
  const timeUnit = unit.replace('s', '')
  const time = {
    minute: () => 60 * 1000,
    hour: () => 60 * time.minute(),
    day: () => 24 * time.hour(),
    week: () => 7 * time.day(),
    month: () => 30 * time.day(),
    year: () => 365 * time.day(),
  }

  switch (timeUnit) {
    case 'year':
    case 'month':
    case 'week':
    case 'day':
    case 'hour':
      return time[timeUnit]()

    case 'minute':
    default:
      return time.minute()
  }
}

function parseExpireDate(expires = '1 minute') {
  const byWords = expires.split(' ')
  const [times, unit] = byWords
  const duration = times * parseUnit(unit)
  const date = new Date()

  date.setTime(date.getTime() + duration)

  return date.toUTCString()
}

const cookieJar = {
  setItem(key, value = true, { expires, domain = window.location.hostname, path = '/' } = {}) {
    const expireDate = parseExpireDate(expires)
    const parsedValue = typeof value !== String
      ? JSON.stringify(value)
      : value
    const cookie = `${key}=${parsedValue};expires=${expireDate};domain=${domain};path=${path}`

    document.cookie = cookie
  },

  getItem(key) {
    const cookies = document.cookie.split(';')
    const cookiesObj = cookies.reduce((acc, item) => {
      const [cookieName, value] = item.split('=')

      return { ...acc, [cookieName.trim()]: value }
    }, {})

    return cookiesObj[key]
  },

  removeItem(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
  },

  clear() {
    const cookies = document.cookie.split(';')
    cookies.forEach((cookie) => {
      const [cookieName] = cookie

      cookieJar.removeItem(cookieName.trim())
    })
  },

  key() {
    console.log('key() method is not available for cookies')
  },
}

export default cookieJar
