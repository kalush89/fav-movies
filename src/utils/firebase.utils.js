import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
    } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDl6mpDA4EZB-17H3pcPOslPiKe0hbdi4I",
  authDomain: "fav-movies-a6f6f.firebaseapp.com",
  projectId: "fav-movies-a6f6f",
  storageBucket: "fav-movies-a6f6f.appspot.com",
  messagingSenderId: "697891041203",
  appId: "1:697891041203:web:fe113cfc77de1b555e25c6"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userDocRef;
  };