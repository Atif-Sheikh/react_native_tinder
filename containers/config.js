
import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCdedwO3PS3yooasExWLDeJQYcBQIsIIFc",
    authDomain: "tinder-clone-1fe86.firebaseapp.com",
    databaseURL: "https://tinder-clone-1fe86.firebaseio.com",
    projectId: "tinder-clone-1fe86",
    storageBucket: "tinder-clone-1fe86.appspot.com",
    messagingSenderId: "454050627014",
    appId: "1:454050627014:web:51d1c0a6987707864d86c7",
    measurementId: "G-3EGQPSDZ7X"
  };
  try{

      firebase.initializeApp(firebaseConfig);
  }
catch(err){
console.log(err)
}