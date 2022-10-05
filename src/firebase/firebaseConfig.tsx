import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPa39w2-TxwtksskI4asD3IB-9RGKWja4",
  authDomain: "athena-dsv.firebaseapp.com",
  projectId: "athena-dsv",
  storageBucket: "athena-dsv.appspot.com",
  messagingSenderId: "782759998381",
  appId: "1:782759998381:web:638c19afff65a2b1932724",
  measurementId: "G-DTFT6FRJLH"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);