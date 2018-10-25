function StorageFallback () {
  let hash = {}

  return {
    setItem(key, value) {
      hash[key] = value
    },

    getItem(key) {
      return hash[key]
    },

    removeItem(key) {
      delete hash[key]
    },

    clear() {
      hash = {}
    },

    key(index = 0) {
      return Object.keys(hash)[parseInt(index, 10) || 0]
    },
  }
}

export default StorageFallback