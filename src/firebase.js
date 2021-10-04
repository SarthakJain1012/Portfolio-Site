import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjKoURChcqpKzo4veGtS1Y2i9K_spsvJ4",
  authDomain: "sarthak-portfolio-71b7e.firebaseapp.com",
  projectId: "sarthak-portfolio-71b7e",
  storageBucket: "sarthak-portfolio-71b7e.appspot.com",
  messagingSenderId: "782828298544",
  appId: "1:782828298544:web:aa3be8522bcc78ec4268f5",
  measurementId: "G-YX2ZNNCXZP",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();

export default database;
