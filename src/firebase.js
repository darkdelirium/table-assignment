import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyD6GVaatQ8R4Cvu5OrVghq1bI79NhJMa70",
    authDomain: "testassignment-c1abf.firebaseapp.com",
    databaseURL: "https://testassignment-c1abf.firebaseio.com",
    projectId: "testassignment-c1abf",
    storageBucket: "testassignment-c1abf.appspot.com",
    messagingSenderId: "663919272687",
    appId: "1:663919272687:web:de280b5a14eb8f47f8f11a"
};
firebase.initializeApp(config);
export default firebase;