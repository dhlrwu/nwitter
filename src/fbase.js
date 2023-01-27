import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDV7Ojck5MXrbWPeLi0yLHN8NIDeji3tt0",
    authDomain: "nwitter-6f169.firebaseapp.com",
    projectId: "nwitter-6f169",
    storageBucket: "nwitter-6f169.appspot.com",
    messagingSenderId: "36093933605",
    appId: "1:36093933605:web:c74a50e1edec3870f1e7cc"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const authService = getAuth(firebaseApp);