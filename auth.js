// auth.js - Central auth handler
import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth, googleProvider } from './firebase-config.js';

export async function googleSignIn() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    console.log('✅ Google Sign-In Success:', user.displayName);
    return user;
  } catch (error) {
    console.error('❌ Google Sign-In Error:', error.code, error.message);
    throw error;
  }
}

export async function emailSignIn(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function emailSignUp(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function userSignOut() {
  await signOut(auth);
}

export { onAuthStateChanged, auth };
