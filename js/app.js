import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_LZId2xjQ3BM0ORJVz6C0YWKJwmCqmeI",
    authDomain: "login-g2025.firebaseapp.com",
    projectId: "login-g2025",
    storageBucket: "login-g2025.appspot.com",
    messagingSenderId: "776870937339",
    appId: "1:776870937339:web:3a89d031f0664e1c2ca65e",
    measurementId: "G-YM7FKTQW0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google login code
document.getElementById("google-login").addEventListener("click", function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            alert("Welcome " + user.displayName);
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error("Error during sign-in: ", errorMessage);
        });
});