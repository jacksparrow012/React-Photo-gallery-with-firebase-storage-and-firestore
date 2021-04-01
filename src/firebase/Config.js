// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app"
import "firebase/storage";
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDjib2413U6K3C1jg6U1pt_8oL6-_KbU3w",
  authDomain: "ninja-firegram-3cc89.firebaseapp.com",
  databaseURL: 'https://ninja-firegram.firebaseio.com/',
  projectId: "ninja-firegram-3cc89",
  storageBucket: "ninja-firegram-3cc89.appspot.com",
  messagingSenderId: "705212071497",
  appId: "1:705212071497:web:2ef004f8eaa28035b58998",
  measurementId: "G-6S2FR83GEG"
};

firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore }