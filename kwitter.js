function adduser(){
    username= document.getElementById("name_input").value;

    localStorage.setItem("username_key", username);

    window.location= "kwitter_room.html";
}