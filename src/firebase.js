import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const prepareData = (snapshot) => { 
    return snapshot.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    })

}

// firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyDPoOVUh5KeIbQJIaIWF1xTozF-kqxXMaI",
    authDomain: "airbnbclone-48676.firebaseapp.com",
    projectId: "airbnbclone-48676",
    storageBucket: "airbnbclone-48676.appspot.com",
    messagingSenderId: "630016193340",
    appId: "1:630016193340:web:b28578bdb6b3009230e439"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// intialize auth
export const auth = getAuth(app);

// initialize cloud firestore

// ----------------SIGN IN WITH GOOGLE FUNCTIONALITY----------------------

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

export const signout = () => signOut(auth);

// --------------------------FIRESTORE QUERIES----------------------------------

const db = getFirestore(app);

// read screens data
export const getHomesData = async () => {
	const querySnapshot = await getDocs(collection(db, "homes"));
     return prepareData(querySnapshot.docs)
};



