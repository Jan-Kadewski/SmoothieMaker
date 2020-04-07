import firebase from 'firebase'
import firestore from 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyCF6zzsVXxgDmKNBYsHufdTUFqAfbfrMRk",
    authDomain: "smoothie-b4ad5.firebaseapp.com",
    databaseURL: "https://smoothie-b4ad5.firebaseio.com",
    projectId: "smoothie-b4ad5",
    storageBucket: "smoothie-b4ad5.appspot.com",
    messagingSenderId: "296633518072",
    appId: "1:296633518072:web:0736208570dc5ed911b80d",
    measurementId: "G-3J19TF4GJ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()