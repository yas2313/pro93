// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtVmBZsMTG2d5InFO4GAe8kjwquB8zvLI",
    authDomain: "pro93-c62a3.firebaseapp.com",
    databaseURL: "https://pro93-c62a3-default-rtdb.firebaseio.com",
    projectId: "pro93-c62a3",
    storageBucket: "pro93-c62a3.appspot.com",
    messagingSenderId: "492708372135",
    appId: "1:492708372135:web:27d49b3c71879177408582"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();