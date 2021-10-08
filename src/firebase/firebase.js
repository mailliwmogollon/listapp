import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqRBsvlODNTdcfBagyGvT5kwfAjYBGY4I",
    authDomain: "listapp-ea558.firebaseapp.com",
    projectId: "listapp-ea558",
    storageBucket: "listapp-ea558.appspot.com",
    messagingSenderId: "592622250905",
    appId: "1:592622250905:web:1c5d01e14f8f6c0b5c0108",
    measurementId: "G-46CEE4JSFJ"
  };

  const firebaseInstance = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseInstance);
  
  export { db };