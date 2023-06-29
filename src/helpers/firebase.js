// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAza-7HX36gjcIUoTyIDy4pXsJkdt1nLQk",
  authDomain: "fir-correo-portfolio.firebaseapp.com",
  projectId: "fir-correo-portfolio",
  storageBucket: "fir-correo-portfolio.appspot.com",
  messagingSenderId: "544148174709",
  appId: "1:544148174709:web:ebaaa1299e60c9ddd8853c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app;