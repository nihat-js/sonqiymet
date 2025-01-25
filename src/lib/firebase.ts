import { initializeApp } from 'firebase/app';
import {  getAuth, GoogleAuthProvider, signInWithPopup, fetchSignInMethodsForEmail, getIdToken } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCbWorNm53iwqjK3A863zAQCk7Bu2t-XyE",
    authDomain: "avtobeh-2025.firebaseapp.com",
    projectId: "avtobeh-2025",
    storageBucket: "avtobeh-2025.firebasestorage.app",
    messagingSenderId: "1005743339674",
    appId: "1:1005743339674:web:dc5e444f2dc3e906778723",
    measurementId: "G-HSHGM6EKXL"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export { auth, GoogleAuthProvider, signInWithPopup, fetchSignInMethodsForEmail, getIdToken };


