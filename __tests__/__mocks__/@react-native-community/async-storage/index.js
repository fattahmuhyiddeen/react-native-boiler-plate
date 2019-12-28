const cache = {};
export default {
  setItem: (key, value) => new Promise((resolve, reject) => (typeof key !== 'string' || typeof value !== 'string')
    ? reject(new Error('key and value must be string'))
    : resolve(cache[key] = value)
  ),
  getItem: (key, value) => new Promise((resolve) => cache.hasOwnProperty(key)
    ? resolve(cache[key])
    : resolve(null)
  ),
  removeItem: (key) => new Promise((resolve, reject) => cache.hasOwnProperty(key)
    ? resolve(delete cache[key])
    : reject('No such key!')
  ),
  clear: () => new Promise(resolve => resolve(cache = {})),
  getAllKeys: () => new Promise(resolve => resolve(Object.keys(cache))),
}
