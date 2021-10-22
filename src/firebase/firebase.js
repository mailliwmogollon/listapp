import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBqRBsvlODNTdcfBagyGvT5kwfAjYBGY4I",
  authDomain: "listapp-ea558.firebaseapp.com",
  projectId: "listapp-ea558",
  storageBucket: "listapp-ea558.appspot.com",
  messagingSenderId: "592622250905",
  appId: "1:592622250905:web:1c5d01e14f8f6c0b5c0108",
  measurementId: "G-46CEE4JSFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
