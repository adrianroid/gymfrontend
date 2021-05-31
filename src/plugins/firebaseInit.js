import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDssg-wNs2WHLm5kaf5TqN5Do1THaQb3pM",
  authDomain: "polos-gym.firebaseapp.com",
  databaseURL: "https://polos-gym-default-rtdb.firebaseio.com",
  projectId: "polos-gym",
  storageBucket: "polos-gym.appspot.com",
  messagingSenderId: "592469136499",
  appId: "1:592469136499:web:cf44584e7a74b1faf10606",
  measurementId: "G-879FCWCFNW",
};
export default firebase.initializeApp(firebaseConfig);