import firebase from 'firebase'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBH2F4j6cmnSjjOwgzn7srnQ-DfmHR7Luw",
    authDomain: "prueba-9a958.firebaseapp.com",
    databaseURL: "https://prueba-9a958-default-rtdb.firebaseio.com",
    projectId: "prueba-9a958",
    storageBucket: "prueba-9a958.appspot.com",
    messagingSenderId: "942760960871",
    appId: "1:942760960871:web:322d40a484b88593eac5c2",
    measurementId: "G-GX721F1CWK"
  };
  // Initialize Firebase
  const firebaseConf = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
export default firebaseConf