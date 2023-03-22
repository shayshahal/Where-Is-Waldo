// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCo5C6p3p_HPnEE0joxH1gnIv-3XAxLoKY',
	authDomain: 'where-s-waldo-68512.firebaseapp.com',
	projectId: 'where-s-waldo-68512',
	storageBucket: 'where-s-waldo-68512.appspot.com',
	messagingSenderId: '16399107379',
	appId: '1:16399107379:web:8c7691081cb7f37b5baa46',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
