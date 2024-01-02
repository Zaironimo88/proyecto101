
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAxgKGkMTzMBpDmeJBXlljiuWH0zZVOQ6c",
      authDomain: "basekwitter.firebaseapp.com",
      projectId: "basekwitter",
      storageBucket: "basekwitter.appspot.com",
      messagingSenderId: "815157165375",
      appId: "1:815157165375:web:d485922b7d4641e65ee78a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
