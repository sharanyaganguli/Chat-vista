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


user_name=localStorage.getItem("username_key");
room_name= localStorage.getItem("key_room_name");

function send(){
    user_message= document.getElementById("message_input").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:user_message,
        like: 0
    });

    document.getElementById("message_input").value=" ";

}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; 

snapshot.forEach(function(childSnapshot) 
{ childKey = childSnapshot.key; 
childData = childSnapshot.val(); 
    
    if(childKey != "purpose")
     { firebase_message_id = childKey; 
        message_data = childData; 
        //Start code
        console.log(firebase_message_id);
        console.log(message_data);

        namee= message_data["name"];
        message= message_data["message"];
        like= message_data["like"];

        name_tag= "<h4> '+name+' <img class='user_tick' src='tick.png'> </h4>";
        message_tag= "<h4 class='message_h4'> '+message+' </h4>";
        button_tag= "<btn class='btn btn-warning' id='plus_firebase_message_id' value="+like+" onclick='updateLike(this.id)'>";
        span_tag= "<span class='glyphicon glyphicon-thumbs-up'>Like: '+like+'</span></btn><hr>";

        row= name_tag+message_tag+button_tag;
        document.getElementById("output").innerHTML+=row;
     }});});}

     getData();

     function updateLike(message_id) 
     {  button_id= message_id;
        likes= document.getElementById(button_id).value;
        updated_likes= Number(likes)+1;
        console.log(updated_likes);

        firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
        });
     }

     function logout()
{
      localStorage.removeItem("username_key");
      localStorage.removeItem("key_room_name");
      window.location= "index.html";

}
