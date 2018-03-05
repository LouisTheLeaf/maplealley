import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBs7afWjdtFbPKgyi0G8b2lOuEynaV_OPg",
    authDomain: "leaf-1646c.firebaseapp.com",
    databaseURL: "https://leaf-1646c.firebaseio.com",
    projectId: "leaf-1646c",
    storageBucket: "leaf-1646c.appspot.com",
    messagingSenderId: "308078437667"
};

var fire = firebase.initializeApp(config);
export default fire;
