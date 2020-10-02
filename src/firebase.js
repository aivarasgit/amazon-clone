import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	  apiKey: "AIzaSyBeNJvZXCOhGgDBDhbMb5OhS3xpuzW-i9w",
	  authDomain: "clone-93812.firebaseapp.com",
	  databaseURL: "https://clone-93812.firebaseio.com",
	  projectId: "clone-93812",
	  storageBucket: "clone-93812.appspot.com",
	  messagingSenderId: "210665011160",
	  appId: "1:210665011160:web:2e903ef67c57a861ff64ad",
	  measurementId: "G-3P9WSQPWEV"
}); 

const auth = firebase.auth(); 

export { auth };
