import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyCmhivC-tCKiwt_m5Gf2Uuga5bA6M2F58M",
  authDomain: "netflix-clone-d9cdc.firebaseapp.com",
  projectId: "netflix-clone-d9cdc",
  storageBucket: "netflix-clone-d9cdc.appspot.com",
  messagingSenderId: "245986204380",
  appId: "1:245986204380:web:3ea6097aeb018e2f123219",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
