import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAW8ZmuuruUahF5y09D3rRE9vGQD3DNZnw",
	authDomain: "skate-uk.firebaseapp.com",
	databaseURL:
		"https://skate-uk-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "skate-uk",
	storageBucket: "skate-uk.appspot.com",
	messagingSenderId: "494609526793",
	appId: "1:494609526793:web:4aab8d1e0ad400c9a308d8",
	measurementId: "G-KP7G6FHFLZ",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
