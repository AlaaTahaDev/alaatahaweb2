// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApCEm2TT3S0jv629RVTPsSSX-19oO5sgg",
  authDomain: "alaawebdata.firebaseapp.com",
  projectId: "alaawebdata",
  storageBucket: "alaawebdata.appspot.com",
  messagingSenderId: "925943775615",
  appId: "1:925943775615:web:5ed8072f5764c90fd99a4a",
  measurementId: "G-4XSX93EF45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const {db}=getFirestore(app);
export {db}
export default app;