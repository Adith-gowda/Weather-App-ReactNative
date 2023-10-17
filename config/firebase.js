import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyDZ89MLQ3nu2Jw9fOuD1SrylgqbOdG4v3A',
  authDomain: 'resqconnect1.firebaseapp.com',
  projectId: 'resqconnect1',
  storageBucket: 'resqconnect1.appspot.com',
  messagingSenderId: '218954810652',
  appId: '1:218954810652:web:938b75d742572cd5d2e6d9',
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
