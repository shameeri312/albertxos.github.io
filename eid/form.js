function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var nextside = document.getElementById("nextside");
    var welcome = document.getElementById("welcome");
    var headline = document.getElementById("headline");
    var login = document.getElementById("login");
    if (username == "shameer" && password == "tayyba") {
        nextside.style.opacity = "1";
        login.style.opacity = "0";
        login.style.visibility = "hidden";
        login.style.transition = "all 1s";
        document.getElementById("lg").style.display = "inline";
    } else {
        alert("incorrect login");
    }
}
// ...............?//????>?>?>?>?<?><?><?><?>?><?><?><?<><?><?><?><?>
// ...............?//????>?>?>?>?<?><?><?><?>?><?><?><?<><?><?><?><?>
// ...............?//????>?>?>?>?<?><?><?><?>?><?><?><?<><?><?><?><?>
// ...............?//????>?>?>?>?<?><?><?><?>?><?><?><?<><?><?><?><?>
// ...............?//????>?>?>?>?<?><?><?><?>?><?><?><?<><?><?><?><?>

