import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCptFHKRJKEOOEX2OCro4BjObUn01wPknI",
    authDomain: "marioplan-b710a.firebaseapp.com",
    databaseURL: "https://marioplan-b710a.firebaseio.com",
    projectId: "marioplan-b710a",
    storageBucket: "marioplan-b710a.appspot.com",
    messagingSenderId: "511160777627"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;