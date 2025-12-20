import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtfXJ2rXSXDoKMjMaBwnAXCpF9b4GCZhs",
  authDomain: "bizbooks-hiring-portal.firebaseapp.com",
  projectId: "bizbooks-hiring-portal",
  storageBucket: "bizbooks-hiring-portal.appspot.com",
  messagingSenderId: "91257847154",
  appId: "1:91257847154:web:d0ba5a0dcc1b6cd0bd0d1b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
