import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA4Q8HzJKkPVGvXQxUvf4mp4x1g5F_12Jc',
  authDomain: 'jdpaiva1-me.firebaseapp.com',
  databaseURL: 'https://jdpaiva1-me.firebaseio.com',
  projectId: 'jdpaiva1-me',
  storageBucket: 'jdpaiva1-me.appspot.com',
  messagingSenderId: '695721555391',
  appId: '1:695721555391:web:13b8cbaf6c12b7ea775d0a',
  measurementId: 'G-ZBRR009NV9',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { firebase, db };
