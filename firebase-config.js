<!DOCTYPE html>
<html>
<head><title>Firebase Config</title></head>
<body>
<script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
  import { getAuth, 
           signInWithEmailAndPassword, 
           createUserWithEmailAndPassword, 
           signInWithPopup, 
           GoogleAuthProvider, 
           signOut, 
           onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

  // 🔥 YOUR LIVE CONFIG:
  window.firebaseConfig = {
    apiKey: "AIzaSyDM7FXBc041Bs3N0PCm18C9VSlm42tA5ZQ",
    authDomain: "vertex-pcmt.firebaseapp.com",
    projectId: "vertex-pcmt",
    storageBucket: "vertex-pcmt.firebasestorage.app",
    messagingSenderId: "960288192749",
    appId: "1:960288192749:web:c5c623dc79036ffce234e4"
  };

  const app = initializeApp(window.firebaseConfig);
  window.auth = getAuth(app);
  window.googleProvider = new GoogleAuthProvider();
  
  console.log('✅ Firebase Ready!');
</script>
</body>
</html>
