import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDrXbTlRwYceqCsjaoLUD7JqGyb8hzNWK0",
	authDomain: "signal-clone-natasha.firebaseapp.com",
	projectId: "signal-clone-natasha",
	storageBucket: "signal-clone-natasha.appspot.com",
	messagingSenderId: "201839195663",
	appId: "1:201839195663:web:022202a9c4ce36973d557a",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { auth, db };
