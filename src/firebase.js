import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuKkqXXTw54TSpZDt3MeTUaQyRO5IMkq4",
    authDomain: "linkedin-clone-yt-5d5f4.firebaseapp.com",
    projectId: "linkedin-clone-yt-5d5f4",
    storageBucket: "linkedin-clone-yt-5d5f4.appspot.com",
    messagingSenderId: "585636255166",
    appId: "1:585636255166:web:24233bbef01dab5ce895ef",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };