
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8xUwTQefSn3Hj-J8ethDGwIlRob5hNjA",
  authDomain: "apnablogapp.firebaseapp.com",
  projectId: "apnablogapp",
  storageBucket: "apnablogapp.appspot.com",
  messagingSenderId: "172936395677",
  appId: "1:172936395677:web:1d7046fc76058d11a24d74",
  measurementId: "G-RJVVMT064B"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and get a reference
const storage = getStorage(app);

export { storage ,  ref, uploadBytes, getDownloadURL  };