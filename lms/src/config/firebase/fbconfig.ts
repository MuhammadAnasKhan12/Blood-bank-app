// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSUUYY3PiiHfmCl-wO_93abSLJlFjdcoU",
  authDomain: "blood-bank-f4aaa.firebaseapp.com",
  projectId: "blood-bank-f4aaa",
  storageBucket: "blood-bank-f4aaa.appspot.com",
  messagingSenderId: "380663106775",
  appId: "1:380663106775:web:7caf1c8e70a770c916f492",
  measurementId: "G-2EGW9XPMDV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);