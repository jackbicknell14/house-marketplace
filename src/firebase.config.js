import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFc61iH4MTZfrhP45VQulem4UURu5G8PE',
  authDomain: 'house-marketplace-app-febc1.firebaseapp.com',
  projectId: 'house-marketplace-app-febc1',
  storageBucket: 'house-marketplace-app-febc1.appspot.com',
  messagingSenderId: '25744627815',
  appId: '1:25744627815:web:40dcaf7de7fd39d54e5cc2',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
