// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1zzSvyrg_WcwesFn6lMpYr0SwNrjxpdA",
  authDomain: "e-com2-954c2.firebaseapp.com",
  projectId: "e-com2-954c2",
  storageBucket: "e-com2-954c2.appspot.com",
  messagingSenderId: "448047166247",
  appId: "1:448047166247:web:7c045ca44ad1255e362f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;