// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//今回、認証機能とファイヤーストア(DataBase)をimport
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5q_Ai7_Tr4k0_aSHfeQd6xZw27CwbFWM",
  authDomain: "blog-react-d62cc.firebaseapp.com",
  projectId: "blog-react-d62cc",
  storageBucket: "blog-react-d62cc.appspot.com",
  messagingSenderId: "758612141943",
  appId: "1:758612141943:web:012178940e627a18f1a372",
  measurementId: "G-N29ZXP747Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth , analytics , provider ,db };
