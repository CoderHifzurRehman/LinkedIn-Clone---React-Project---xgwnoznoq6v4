// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKAoPzb6gduAwc1FBcDPLPM5_RHpH8WS0",
  authDomain: "linkedin-clone-f14e8.firebaseapp.com",
  projectId: "linkedin-clone-f14e8",
  storageBucket: "linkedin-clone-f14e8.appspot.com",
  messagingSenderId: "40632802138",
  appId: "1:40632802138:web:39a252c9451412cf79b163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
