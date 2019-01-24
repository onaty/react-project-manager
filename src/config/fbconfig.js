import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAi_1UWDzNYIh-ye3vlL5ThAp6TYxp9J8I",
    authDomain: "project-manager-react-885ec.firebaseapp.com",
    databaseURL: "https://project-manager-react-885ec.firebaseio.com",
    projectId: "project-manager-react-885ec",
    storageBucket: "project-manager-react-885ec.appspot.com",
    messagingSenderId: "1068288418862"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 