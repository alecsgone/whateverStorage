import window from 'global/window'
import StorageFallback from './StorageFallback'
import cookieJar from './cookieJar'

function whateverStorage(storage) {
  if (storage === 'cookies') {
    return cookieJar
  }

  let storageMethod

  try {
    window[storage].setItem('test', 'test')
    window[storage].removeItem('test')

    storageMethod = window[storage]
  } catch (err) {
    storageMethod = new StorageFallback()
  }

  return {

    getItem(key) {
      const json = storageMethod.getItem(key) || null
      return JSON.parse(json)
    },

    setItem(key, value = true) {
      storageMethod.setItem(key, JSON.stringify(value))
    },

    removeItem(key) {
      storageMethod.removeItem(key)
    },

    clear() {
      storageMethod.clear()
    },

    key(index = 0) {
      return storageMethod.key(index)
    },
  }
}

export default {
  local: whateverStorage('localStorage'),
  session: whateverStorage('sessionStorage'),
  cookie: whateverStorage('cookies'),
}
