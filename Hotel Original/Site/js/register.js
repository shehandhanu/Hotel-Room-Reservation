function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

var check = function() {
    if (document.getElementById('pass').value ==
      document.getElementById('repass').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords Matched';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords are not Matching';
    }
  }