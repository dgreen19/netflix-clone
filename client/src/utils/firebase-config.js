// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCP9cdBblycVSwGq29SciiXJhCdILlhZ2Q",
	authDomain: "netflix-clone-b9dca.firebaseapp.com",
	projectId: "netflix-clone-b9dca",
	storageBucket: "netflix-clone-b9dca.appspot.com",
	messagingSenderId: "940625912128",
	appId: "1:940625912128:web:8165504307081a58c25aa5",
	measurementId: "G-K3Z74TF9BS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
