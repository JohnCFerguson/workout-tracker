import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA-Gr33vyLqp2xy1Nw9gAzmCGhsQ00e95M',
  authDomain: 'workout-tracker-b6212.firebaseapp.com',
  databaseURL: 'workout-tracker-b6212.firebaseio.com',
  projectId: 'workout-tracker-b6212',
  storageBucket: 'workout-tracker-b6212.appspot.com',
  messagingSenderId: '758757111966',
  appId: '1:758757111966:ios:2e6fc4c23ef22790f3e38f',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };