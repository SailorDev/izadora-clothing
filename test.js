import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('kH0fWOVKkwW8GNgffAKI')
  .collection('cartItems')
  .doc('kH0fWOVKkwW8GNgffAKI');

firestore.doc('/users/kH0fWOVKkwW8GNgffAKI/cartItems/kH0fWOVKkwW8GNgffAKI');
firestore.collection('/users/kH0fWOVKkwW8GNgffAKI/cartItems');
