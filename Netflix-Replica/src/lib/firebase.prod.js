//.prod means its our production version

import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// import {seedDatabase} from '../seed';
// Only run this once to seed the Firestore

// config with keys etc
const config = {
    apiKey: "AIzaSyDdqfoMVQlTWgEXWqwtgeXJSorh8GU0-9c",
    authDomain: "netflix-replica-ec3e2.firebaseapp.com",
    projectId: "netflix-replica-ec3e2",
    storageBucket: "netflix-replica-ec3e2.appspot.com",
    messagingSenderId: "754750973807",
    appId: "1:754750973807:web:d351bbf4687db0b0ec2a9a"
}

const firebase = initializeApp(config);
const auth = getAuth(firebase);
const db = getFirestore(firebase);

// seedDatabase(db);

export { firebase, auth, db };