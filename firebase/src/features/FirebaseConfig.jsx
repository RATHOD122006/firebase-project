// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPWLEb6rsRh7ehxoKtWkOe-uye3BfzZOs",
  authDomain: "asyncthunks-713c8.firebaseapp.com",
  projectId: "asyncthunks-713c8",
  storageBucket: "asyncthunks-713c8.firebasestorage.app",
  messagingSenderId: "311413869899",
  appId: "1:311413869899:web:36d171842e12621f842cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)