// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Nfa6Hmng01mGCRCpaxGnsTl7rJugK1s",
  authDomain: "little-fire-flames.firebaseapp.com",
  projectId: "little-fire-flames",
  storageBucket: "little-fire-flames.appspot.com",
  messagingSenderId: "893283078105",
  appId: "1:893283078105:web:028525d8ec0930189d93c8",
  measurementId: "G-Q64KMLX8QH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
