import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
 
      apiKey: "AIzaSyDtNCuH74leTtVsnDvdtzyUGnRdhZG5qmM",
      authDomain: "xanakena-c3163.firebaseapp.com",
      databaseURL: "https://xanakena-c3163.firebaseio.com",
      projectId: "xanakena-c3163",
      storageBucket: "xanakena-c3163.appspot.com",
      messagingSenderId: "509338751316",
      appId: "1:509338751316:web:9cece98be37c60c6ec78c1"
});

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
