import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBVoaypYCZEAeO1bmCk2iMT4pYL_MAEWy4",
  authDomain: "recettes-app-b092b.firebaseapp.com",
  databaseURL: "https://recettes-app-b092b.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
