// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBivKOadFix_MUGHm8jtSWdGQr9-bMUTTo",
  authDomain: "genius-car-services-220e3.firebaseapp.com",
  projectId: "genius-car-services-220e3",
  storageBucket: "genius-car-services-220e3.appspot.com",
  messagingSenderId: "543856398028",
  appId: "1:543856398028:web:e168ebbf46389de585fc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;