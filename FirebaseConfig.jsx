// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD52iNBHyWiWBjwQJVSoYBNfenlpxKVLMQ",
  authDomain: "travelapp-a8d0c.firebaseapp.com",
  projectId: "travelapp-a8d0c",
  storageBucket: "travelapp-a8d0c.appspot.com",
  messagingSenderId: "400523609988",
  appId: "1:400523609988:web:af5aa6add3feac348cffd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };