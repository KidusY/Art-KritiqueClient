import firebase from 'firebase/app';
import "firebase/firebase-storage"

const firebaseConfig = {
    apiKey: "AIzaSyAi_4qEVBN96QJ5VJBaJ-VOjrE3FsRClJI",
    authDomain: "imageupload-bc856.firebaseapp.com",
    projectId: "imageupload-bc856",
    storageBucket: "imageupload-bc856.appspot.com",
    messagingSenderId: "427613883884",
    appId: "1:427613883884:web:de91f7e8e2613ed7ebc4c9",
    measurementId: "G-34K7Q0RSYG"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage};