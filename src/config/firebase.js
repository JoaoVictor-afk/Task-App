import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
	apiKey: "AIzaSyBH308jv0JzYN0WkunHMI1RFLITbN9foLM",
	authDomain: "taskapp-a64f9.firebaseapp.com",
	projectId: "taskapp-a64f9",
	storageBucket: "taskapp-a64f9.appspot.com",
	messagingSenderId: "757052441787",
	appId: "1:757052441787:web:2a42f0a0700a9df3a8559e",
};

firebase.initializeApp(config);

export default firebase;
