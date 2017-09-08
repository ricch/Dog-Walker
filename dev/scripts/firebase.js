import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBxvWz9mMQvsxcWQaofHPL6wr8TJh4x6oE",
	authDomain: "the-puggle-is-real.firebaseapp.com",
	databaseURL: "https://the-puggle-is-real.firebaseio.com",
	projectId: "the-puggle-is-real",
	storageBucket: "the-puggle-is-real.appspot.com",
	messagingSenderId: "484903284387"
};

firebase.initializeApp(config);

export default firebase;