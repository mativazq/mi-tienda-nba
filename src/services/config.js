import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCuWwSC6C7MFupQPGDP5yeVcFq7Xjpyyk",
  authDomain: "mi-ecommerce-nba.firebaseapp.com",
  projectId: "mi-ecommerce-nba",
  storageBucket: "mi-ecommerce-nba.appspot.com",
  messagingSenderId: "481925537702",
  appId: "1:481925537702:web:1ccd88b51f16aa64f3f967"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);



