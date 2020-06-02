import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCVr1zEoVK6dBM_dd7FLWkUft5pR8CPelc",
  authDomain: "wily-b646b.firebaseapp.com",
  databaseURL: "https://wily-b646b.firebaseio.com",
  projectId: "wily-b646b",
  storageBucket: "wily-b646b.appspot.com",
  messagingSenderId: "261552349776",
  appId: "1:261552349776:web:c1ae031b7f2744041d2755"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
  