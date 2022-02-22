const {
  reservations,
  reviews,
  dateAvailabilities,
  restaurants,
} = require('./testData');
const {
  initializeFirestore,
  setDoc,
  doc,
  collection,
} = require('firebase/firestore');
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: 'AIzaSyCDhrMvxRmnQIhabQpMd23CrX8AZ6cwjN8',
  authDomain: 'reservation-fe876.firebaseapp.com',
  projectId: 'reservation-fe876',
  storageBucket: 'reservation-fe876.appspot.com',
  messagingSenderId: '557705528312',
  appId: '1:557705528312:web:17c172dfac69d681878c0d',
  measurementId: 'G-D89QNQ4GCV',
};

/**
 * Firebase initializer
 */
const firebase = initializeApp(firebaseConfig);

/**
 * Firebase Firestore initializer
 */
const db = initializeFirestore(firebase, {});

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item;
      const collectionRef = collection(db, collectionName);
      return setDoc(doc(collectionRef, id), data);
    })
  );
}

Promise.all([
  populateCollection('reservations', reservations),
  populateCollection('reviews', reviews),
  populateCollection('dateAvailabilities', dateAvailabilities),
  populateCollection('restaurants', restaurants),
])
  .then(() => {
    console.log('Done 🧁');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error 🧧', err);
    process.exit(1);
  });
