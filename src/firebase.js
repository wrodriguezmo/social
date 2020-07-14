import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyDSJ0oVCVFn33hsRP66o8CDKS5pnikP4ao",
  authDomain: "calendar-a41be.firebaseapp.com",
  databaseURL: "https://calendar-a41be.firebaseio.com",
  projectId: "calendar-a41be",
  storageBucket: "calendar-a41be.appspot.com",
  messagingSenderId: "446517952910",
  appId: "1:446517952910:web:352ecdc029a245849ee4df"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
