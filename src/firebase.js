import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDytAv9gREvM1EUvIhOo_sTyGOGMNzeYuI",
    authDomain: "clone-fd29a.firebaseapp.com",
    projectId: "clone-fd29a",
    storageBucket: "clone-fd29a.appspot.com",
    messagingSenderId: "955663753246",
    appId: "1:955663753246:web:902df09cad70c3f454ce0f",
    measurementId: "G-BHY5RHZLZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();