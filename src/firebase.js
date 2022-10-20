import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc,doc } from "firebase/firestore";

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



// --------------------------FIRESTORE QUERIES----------------------------------

const db = getFirestore(app);

// read screens data
export const getHomesData = async () => {
	const querySnapshot = await getDocs(collection(db, "homes"));
     return prepareData(querySnapshot.docs)
};

export const getHomeDetails = async (id) => {
     
    const snapshotRef = doc(db, `homes/${id}`);
    
    const querySnapshot = await getDoc(snapshotRef)

    if (querySnapshot.exists()) {

        return {
            id: querySnapshot.id,
            ...querySnapshot.data()
        }
        
    } else {
        console.log('document doesnt exist')
    }


}


