import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAla4BJUBf-HEvEyrEyz4BoateoruSO3GA',
  authDomain: 'izadora-db.firebaseapp.com',
  projectId: 'izadora-db',
  storageBucket: 'izadora-db.appspot.com',
  messagingSenderId: '644027811404',
  appId: '1:644027811404:web:94bed4f0636cee7ae116e9',
  measurementId: 'G-9Q3Z9VH858',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
