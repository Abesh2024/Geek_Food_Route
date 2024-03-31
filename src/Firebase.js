// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwgPxqeDvj5TqmUwNe5LYCxSfvRrpObyY",
  authDomain: "redux-app-52cd1.firebaseapp.com",
  projectId: "redux-app-52cd1",
  storageBucket: "redux-app-52cd1.appspot.com",
  messagingSenderId: "556853733064",
  appId: "1:556853733064:web:d38c8c59225b5ad32c67fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;