const firebaseConfig = {
    apiKey: "AIzaSyAhV7-HDCCc3MMA0NkTHx1cJBZspZ7T_D0",
    authDomain: "chatboxdatabase-c1040.firebaseapp.com",
    databaseURL: "https://chatboxdatabase-c1040-default-rtdb.firebaseio.com",
    projectId: "chatboxdatabase-c1040",
    storageBucket: "chatboxdatabase-c1040.appspot.com",
    messagingSenderId: "288365153754",
    appId: "1:288365153754:web:9fbd37c25845c337e304e3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
  
        window.location = "kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "chatbox_msg.html";
  }
  
  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "chatbox.html";
  }