// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const vite_key = import.meta.env.VITE_apiKey;

const firebaseConfig = {
  apiKey: "AIzaSyCKo0gYB-pTbkt1QKx80FOQDCWjQiiR4S4",
  authDomain: "mongo-mongoose-test.firebaseapp.com",
  projectId: "mongo-mongoose-test",
  storageBucket: "mongo-mongoose-test.appspot.com",
  messagingSenderId: "170112366052",
  appId: "1:170112366052:web:7393623986d5b3426243f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
