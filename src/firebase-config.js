import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxzBIvG8Zd9CO4iJKFycAA6XKNbc2L9V8",
  authDomain: "my-original-app-n8.firebaseapp.com",
  projectId: "my-original-app-n8",
  storageBucket: "my-original-app-n8.appspot.com",
  messagingSenderId: "737942711769",
  appId: "1:737942711769:web:7d955e0af993f90efcbdc8",
  measurementId: "G-0FY2GD2TT7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)