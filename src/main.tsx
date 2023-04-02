import { initializeApp } from 'firebase/app';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
} from 'firebase/firestore';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const firebaseConfig = {
	apiKey: 'AIzaSyCo5C6p3p_HPnEE0joxH1gnIv-3XAxLoKY',
	authDomain: 'where-s-waldo-68512.firebaseapp.com',
	projectId: 'where-s-waldo-68512',
	storageBucket: 'where-s-waldo-68512.appspot.com',
	messagingSenderId: '16399107379',
	appId: '1:16399107379:web:8c7691081cb7f37b5baa46',
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
