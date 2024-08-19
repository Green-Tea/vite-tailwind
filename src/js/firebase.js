// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChnM7DSA1ZA0wiTGCBhuURfbOWGq3w83M",
    authDomain: "vite-tailwind-a1e16.firebaseapp.com",
    projectId: "vite-tailwind-a1e16",
    storageBucket: "vite-tailwind-a1e16.appspot.com",
    messagingSenderId: "731530837766",
    appId: "1:731530837766:web:0f0f848656ddd87d126887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
const db = getFirestore(app);

const storage = getStorage(app);

export {
    db,
    storage
}