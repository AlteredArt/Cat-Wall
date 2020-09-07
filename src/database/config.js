import * as firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDKnYHwGaTp4XD5-eRGUUEoGXKQxFux8EY",
  authDomain: "catwall-e7412.firebaseapp.com",
  databaseURL: "https://catwall-e7412.firebaseio.com",
  projectId: "catwall-e7412",
  storageBucket: "catwall-e7412.appspot.com",
  messagingSenderId: "347674994042",
  appId: "1:347674994042:web:e4f8d3646f480829e1a2c3",
  measurementId: "G-83MH6N9JYK"
};
  
  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}