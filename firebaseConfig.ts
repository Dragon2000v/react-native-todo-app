import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBIwU-ekLwhjgi2I_i1ngYXC7ilQS0IAF4',
  authDomain: 'firetodoapp-391fa.firebaseapp.com',
  projectId: 'firetodoapp-391fa',
  storageBucket: 'firetodoapp-391fa.appspot.com',
  messagingSenderId: '154991461058',
  appId: '1:154991461058:web:3e7c776942e897f3da315b',
  measurementId: 'G-2V0MDQV5FH',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
