import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC1LpAfELEsJIZVtL_nPh8iNvSbP8mzg8w",
        authDomain: "messenger-clone-b167d.firebaseapp.com",
        databaseURL: "https://messenger-clone-b167d-default-rtdb.firebaseio.com",
        projectId: "messenger-clone-b167d",
        storageBucket: "messenger-clone-b167d.appspot.com",
        messagingSenderId: "956939232486",
        appId: "1:956939232486:web:59a609ec58de45e23c8727",
        measurementId: "G-YB4Q7HDWZH"
});

const db = firebaseApp.firestore();

export default db ;