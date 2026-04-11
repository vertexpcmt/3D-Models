import { auth, provider } from './firebase.js';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Login
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}

// Google login
export async function googleLogin() {
  return await signInWithPopup(auth, provider);
}

// Protect pages
export function protectPage() {
  onAuthStateChanged(auth, (user) => {
    if (!user) window.location.href = "login.html";
  });
}

// Logout
export function logout() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}
