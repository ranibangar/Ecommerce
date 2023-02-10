import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeuotEXsJvnHq-7uddCYP6DQZ8iN1983k",
  authDomain: "ecommerce-b9bb3.firebaseapp.com",
  databaseURL: "https://ecommerce-b9bb3-default-rtdb.firebaseio.com",
  projectId: "ecommerce-b9bb3",
  storageBucket: "ecommerce-b9bb3.appspot.com",
  messagingSenderId: "549050177460",
  appId: "1:549050177460:web:6d4f5744683b9061f084e1",
  measurementId: "G-JVX60YCX1V"
};

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { auth, db , storage };