const VERSION = 1

export default () => {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not support'))
    }

    const request = window.indexedDB.open('sh', VERSION)
    request.onupgradeneeded = e => {
      const db = e.target.result

      if (e.oldVersion < 1) {
        db.createObjectStore('bg', {
          autoIncrement: true
        })
      }
    }

    request.onsuccess = e => {
      resolve(e.target.result)
    }

    request.onerror = e => {
      reject(e)
    }
  })
}
