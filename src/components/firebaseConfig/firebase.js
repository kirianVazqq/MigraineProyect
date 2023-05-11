// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyA_L0OJTyFcSnetFxaUV1JwsE5NP_FB28w",
  authDomain: "migraine-project.firebaseapp.com",
  databaseURL: "https://migraine-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "migraine-project",
  storageBucket: "migraine-project.appspot.com",
  messagingSenderId: "368302234229",
  appId: "1:368302234229:web:ece131427037462296763c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;