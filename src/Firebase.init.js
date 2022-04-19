// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8e1CJuCgUDGp4ZQiZVF_nsNdJl3JxRis",
    authDomain: "ema-jhon-7ddf5.firebaseapp.com",
    projectId: "ema-jhon-7ddf5",
    storageBucket: "ema-jhon-7ddf5.appspot.com",
    messagingSenderId: "1028850546483",
    appId: "1:1028850546483:web:fdef837e533de5970d3046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 