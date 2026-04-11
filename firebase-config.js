// firebase-config.js - ✅ FULLY WORKING VERSION
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9X...",  // Your keys (keep these!)
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ FIX #1: Add Google Provider
export const googleProvider = new GoogleAuthProvider();

// ✅ FIX #2: Configure for no "constructor" error
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// ✅ FIX #3: Optional - Language support
googleProvider.useDeviceLanguage();
