import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAy9tEJFsQFhZNLOihvI5pQfY0vCppkuH8",
    authDomain: "chatbox-app-6a4d0.firebaseapp.com",
    databaseURL: "https://chatbox-app-6a4d0.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base