import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAmElUFh4Tqf816HUxrV9SscymtGXtUlyE",
  authDomain: "pokemon-app-aa811.firebaseapp.com",
  databaseURL: "https://pokemon-app-aa811-default-rtdb.firebaseio.com",
  projectId: "pokemon-app-aa811",
  storageBucket: "pokemon-app-aa811.appspot.com",
  messagingSenderId: "300498947262",
  appId: "1:300498947262:web:e97a5c0138a12477d2a2ef"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;