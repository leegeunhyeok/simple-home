/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('ServiceWorker: Ready')
    },
    registered () {
      console.log('ServiceWorker: Registered')
    },
    cached () {
      console.log('ServiceWorker: Content has been cached for offline use')
    },
    updatefound () {
      console.log('ServiceWorker: New update found')
    },
    updated () {
      console.log('ServiceWorker: Content updated. Please refresh')
    },
    offline () {
      console.log('ServiceWorker: No internet connection found. Running offline mode')
    },
    error (error) {
      console.error('ServiceWorker: Error during service worker registration:', error)
    }
  })
}
