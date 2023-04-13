// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products/libraries that you want to use
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUp4YtQzbE27pFTqHsxexyHD0jgPygZJI",
    authDomain: "crwn-db-cd613.firebaseapp.com",
    projectId: "crwn-db-cd613",
    storageBucket: "crwn-db-cd613.appspot.com",
    messagingSenderId: "91781945419",
    appId: "1:91781945419:web:b432dcec80aba096b495ce"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);