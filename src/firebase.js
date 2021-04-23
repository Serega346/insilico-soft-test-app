import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPW5-Ozy9SrtCMBVhwosU9gjEptwvtxDw",
    authDomain: "insilico-soft-test-app.firebaseapp.com",
    databaseURL: "https://insilico-soft-test-app-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "insilico-soft-test-app",
    storageBucket: "insilico-soft-test-app.appspot.com",
    messagingSenderId: "296604141053",
    appId: "1:296604141053:web:7635fbaf4b05a7c48c0594",
    measurementId: "G-GPMP5W1FM8"
};

firebase.default.initializeApp(firebaseConfig)
export const notesRef = firebase.default.database().ref("notes")
export const database = firebase.default.database()
