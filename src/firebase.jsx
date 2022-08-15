import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYGUf1pgt9Sliz_VpsImj1iE3YytVid7o",
    authDomain: "portfolio-stack.firebaseapp.com",
    projectId: "portfolio-stack",
    storageBucket: "portfolio-stack.appspot.com",
    messagingSenderId: "836195717071",
    appId: "1:836195717071:web:939fb6e36a7804e75b0cba",
    measurementId: "G-3V35WSGGG8"
};

export default !Firebase.apps.length 
  ? Firebase.initializeApp(firebaseConfig).firestore()
  : Firebase.app().firestore();

const db = Firebase.firestore();

const auth = Firebase.auth();

const provider = new Firebase.auth.GoogleAuthProvider();
const bookProvider = new Firebase.auth.FacebookAuthProvider();

export {db, auth , provider , bookProvider};