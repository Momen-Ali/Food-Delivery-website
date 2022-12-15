import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDddJ1qlcqxBZIn4Hu6ZBjt9rEjhUG4ufg",
  authDomain: "food-delivery-app-1a65a.firebaseapp.com",
  databaseURL: "https://food-delivery-app-1a65a-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-1a65a",
  storageBucket: "food-delivery-app-1a65a.appspot.com",
  messagingSenderId: "517620805401",
  appId: "1:517620805401:web:c07b4e88fda9110fa91f88",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };
