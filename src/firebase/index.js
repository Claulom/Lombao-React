import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA8-52oqWrX-ONqMo33E6Sa-98zW_20t6w",
    authDomain: "ecommerce-cs.firebaseapp.com",
    projectId: "ecommerce-cs",
    storageBucket: "ecommerce-cs.appspot.com",
    messagingSenderId: "84429274645",
    appId: "1:84429274645:web:078ce91df0d661349c581c"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;

  export const getFirestore = () =>  firebase.firestore(app);