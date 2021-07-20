import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyBH308jv0JzYN0WkunHMI1RFLITbN9foLM",
	authDomain: "taskapp-a64f9.firebaseapp.com",
	projectId: "taskapp-a64f9",
	storageBucket: "taskapp-a64f9.appspot.com",
	messagingSenderId: "757052441787",
	appId: "1:757052441787:web:2a42f0a0700a9df3a8559e",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
