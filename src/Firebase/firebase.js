import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAfx13UgN97slT_zkLI3KZDQH5zL6tKE7Q",
    authDomain: "random-d6983.firebaseapp.com",
    databaseURL: "https://random-d6983.firebaseio.com",
    projectId: "random-d6983",
    storageBucket: "random-d6983.appspot.com",
    messagingSenderId: "898747621857",
    appId: "1:898747621857:web:9ffcffc74bcd89ca3b72a0",
    measurementId: "G-H951SN5VCD"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();