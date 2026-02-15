import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlmi1oGz83TJ6Dy04L7GKWxoLpUZhE7oQ",
    authDomain: "portfolio-a2c20.firebaseapp.com",
    projectId: "portfolio-a2c20",
    storageBucket: "portfolio-a2c20.firebasestorage.app",
    messagingSenderId: "27012476613",
    appId: "1:27012476613:web:37aaf73fead100e94f4aac",
    measurementId: "G-S7EPBYQ6P1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
