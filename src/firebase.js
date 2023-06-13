import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcqlcsPvZtgihO0ZFsN8Dj6w-zhAXuyrQ",
    authDomain: "blog-ba7a1.firebaseapp.com",
    projectId: "blog-ba7a1",
    storageBucket: "blog-ba7a1.appspot.com",
    messagingSenderId: "429383513821",
    appId: "1:429383513821:web:62d25e7b69ba7c83660d34",
    measurementId: "G-HX02TQMTG9",
  };

const app = firebase.initializeApp(firebaseConfig);

export default app;