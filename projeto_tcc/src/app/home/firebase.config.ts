import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB-HiFrcThUnE_yrfRx75qUsL8yx9VeOtY",
    authDomain: "tela-login-372a2.firebaseapp.com",
    projectId: "tela-login-372a2",
    storageBucket: "tela-login-372a2.firebasestorage.app",
    messagingSenderId: "191780137198",
    appId: "1:191780137198:web:31f207fe8a5bf3b2846bff"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);