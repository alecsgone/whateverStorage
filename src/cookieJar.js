import window from 'global/window'
import document from 'global/document'

import parseExpireDate from './parseExpireDate'

const cookieJar = {
  setItem(key, value = true, { expires, domain = window.location.hostname, path = '/' } = {}) {
    const expireDate = parseExpireDate(expires)
    const parsedValue = JSON.stringify(value)
    const cookie = `${key}=${parsedValue};expires=${expireDate};domain=${domain};path=${path}`

    document.cookie = cookie
  },

  getItem(key) {
    const cookies = document.cookie.split(';')
    const cookiesObj = cookies.reduce((acc, item) => {
      const [cookieName, value] = item.split('=')

      return { ...acc, [cookieName.trim()]: value }
    }, {})

    return JSON.parse(cookiesObj[key])
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
