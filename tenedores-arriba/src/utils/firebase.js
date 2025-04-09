// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmNdZKRz9p3yh7QogQM8Ypy4qoHsQIcOE",
    authDomain: "tenedores-arriba-v1.firebaseapp.com",
    projectId: "tenedores-arriba-v1",
    storageBucket: "tenedores-arriba-v1.firebasestorage.app",
    messagingSenderId: "544156135144",
    appId: "1:544156135144:web:ee196fc971cffda768235d"
};

// Initialize Firebase
const firebaseInit = initializeApp(firebaseConfig);
export { firebaseInit };