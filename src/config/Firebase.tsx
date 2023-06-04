import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC40MDiplzulVtXPd2kVXTi-n4suBasE9Q",
  authDomain: "authentication-home-c345b.firebaseapp.com",
  projectId: "authentication-home-c345b",
  storageBucket: "authentication-home-c345b.appspot.com",
  messagingSenderId: "969777078682",
  appId: "1:969777078682:web:af04263fb66fe8950b9a23",
  measurementId: "G-7W69ZGM1DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
