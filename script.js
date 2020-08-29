function generate() {
    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefglmonpqrstuvwxyz1234567890!@#$%^&*()_+'";
    let password = "";
    for (var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;
    document.getElementById("lastNums").innerHTML += password + "<br />";
}
document.getElementById("length").innerHTML = "Password Length: 25";
document.getElementById("slider").oninput = function () {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Password Length" + document.getElementById("slider").value;
    } else {
        document.getElementById("length").innerHTML = "Password Length: 1";
    }
}
function copypassword (){
    document.getElementById("display").querySelector();
    document.execCommand("copy");
    alert("Password Copied to clipboard");
}