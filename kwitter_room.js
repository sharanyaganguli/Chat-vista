var firebaseConfig = {
    apiKey: "AIzaSyDh5rpw8kpgEiJzwDjQkhXB_v6Mc7HEO7I",
    authDomain: "chat-vista.firebaseapp.com",
    databaseURL: "https://chat-vista-default-rtdb.firebaseio.com",
    projectId: "chat-vista",
    storageBucket: "chat-vista.appspot.com",
    messagingSenderId: "231504985284",
    appId: "1:231504985284:web:72e4591cffc845a0921d91",
    measurementId: "G-W5JE49ND77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  username= localStorage.getItem("username");
  document.getElementById("name").innerHTML= "welcome "+user_name+"!";

  function addroom()
  { room_name= document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });

   localStorage.setItem("key_room_name", room_name);
   window.location="kwitter_page.html";
  }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
console.log("room_name-",Room_names);

row= "<div class= 'room_name' id= "+Room_names+" onclick= 'redirecToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+= row;
    });});}
getData();

function redirecToRoomName(name)
{
    console.log(name);
    localStorage.setItem("key_room_name", name);
    window.location= "kwitter_page.html";

}

function logout()
{
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location= "index.html";

}
