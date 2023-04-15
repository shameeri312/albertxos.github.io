function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username != "tayyba" && username != "Tayyba") {
        alert("ERROR!! LOGING IN");
    } else {
        alert("LOGGED IN");
    }
}