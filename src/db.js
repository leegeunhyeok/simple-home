const VERSION = 1
const BG_STORE = 'bg'

export const open = () => {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB not support'))
    }

    const request = window.indexedDB.open('sh', VERSION)
    request.onupgradeneeded = e => {
      const db = e.target.result

      if (e.oldVersion < 1) {
        db.createObjectStore(BG_STORE, {
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

export const getImage = db => {
  return new Promise((resolve, reject) => {
    const cursor = db.transaction(BG_STORE)
      .objectStore(BG_STORE)
      .openCursor(null, 'prev')

    cursor.onerror = reject
    cursor.onsuccess = (e) => {
      const c = e.target.result
      if (c) {
        resolve((c.value || {}))
      } else {
        resolve({})
      }
    }
  })
}

export const setImage = (db, imageOrStyle, type) => {
  return new Promise((resolve, reject) => {
    const request = db.transaction(BG_STORE, 'readwrite')
      .objectStore(BG_STORE)
      .clear()

    request.onerror = reject
    request.onsuccess = () => {
      const request = db.transaction(BG_STORE, 'readwrite')
        .objectStore(BG_STORE)
        .add({
          data: imageOrStyle,
          type
        })

      request.onerror = reject
      request.onsuccess = resolve
    }
  })
}
