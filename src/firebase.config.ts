// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { child, get, getDatabase, ref } from 'firebase/database'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics
const analytics = getAnalytics(app)
logEvent(analytics, 'notification_received')

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app)

function getKeys(language: string) {
  const dbRef = ref(db)
  // get(child(dbRef, language))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val())
  //       return snapshot.val()
  //     } else {
  //       console.log('No data available')
  //       return {}
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //     return {}
  //   })
  return new Promise((resolve, reject) => {
    get(child(dbRef, language))
    .then((snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.val())
      } else {
        console.log('No data available')
        reject('No data available')
      }
    })
    .catch((error) => {
      console.error(error)
      reject(error)
    })
  })
}

export { app, getKeys }
