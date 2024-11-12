import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCHfVa0sDzblWdB89MO4p4K_YcAz9zLn70",
  authDomain: "credibully-site.firebaseapp.com",
  projectId: "credibully-site",
  storageBucket: "credibully-site.firebasestorage.app",
  messagingSenderId: "10393398856",
  appId: "1:10393398856:web:7b192a65e54a3fd690b27d",
  measurementId: "G-CJNZXYG04J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

console.log('Firebase initialized successfully');

export { app, db, analytics };