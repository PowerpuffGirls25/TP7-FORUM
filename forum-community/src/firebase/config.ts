import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey : "AIzaSyDacEPyhFM95e-pKeB5ey_nq7NSNKZaowM" ,
  authDomain: "my-forum-community.firebaseapp.com",
  projectId: "my-forum-community",
  storageBucket: "my-forum-community.firebasestorage.app",
  messagingSenderId: "654751909112",
  appId: "1:654751909112:web:98036e07fc1ff281a3670d",
  measurementId: "G-QFES2MFZ8F"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

export default app
