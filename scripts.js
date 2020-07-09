var validateForm = function(){
  var name = document.getElementById('name').value;
  // var sid = document.forms["proj1"]["sid"].value;
  // var email = document.forms["proj1"]["email"].value;
  if (name == "") {
    document.getElementsByClassName('message').style.color = 'red';
    document.getElementsByClassName('message').innerHTML = "This field is required";
    return false;
  }
};

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//Email Validate function
function validate() {
  $("#email").keyup(function() {

    var email = $("#email").val();
    if (validateEmail(email)) {
      $("#checkEmail").text(email + " is valid");
      $("#checkEmail").css("color", "green");
    } else {
      $("#checkEmail").text(email + " is not valid");
      $("#checkEmail").css("color", "red");
    }
  });

 //UPDATE
$(document).ready(function() {
  $("#checkEmail").keyup(validate);
});
}

// matching password validation
var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('pwmessage').style.color = 'green';
    document.getElementById('pwmessage').innerHTML = 'matching';
  } else {
    document.getElementById('pwmessage').style.color = 'red';
    document.getElementById('pwmessage').innerHTML = 'not matching';
  }
};