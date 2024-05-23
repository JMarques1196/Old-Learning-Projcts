import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase} from '../seed';

// console.log(seedDatabase)

const config = {
  apiKey: 'AIzaSyCXEsnZd1ZnSOqoBr5y1KPGZntBMFhbjOw',
  authDomain: 'instareplica-14cf5.firebaseapp.com',
  projectId: 'instareplica-14cf5',
  storageBucket: 'instareplica-14cf5.appspot.com',
  messagingSenderId: '618696886921',
  appId: '1:618696886921:web:6a7aaa5b773ec08c1d9458'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
