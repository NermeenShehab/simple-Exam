  // window.addEventListener('load', function() { //start load event
  $(function() { //start load event
      //1-sellect items
      username = document.getElementById('username');
      userpass = document.getElementById('userpass');
      confirmpass = document.getElementById('confirmpass');
      email = document.getElementById('useremail');
      gender = document.querySelectorAll("input[type='radio']:checked").value

      username.focus();

      //2-select error message
      usernameerror = document.getElementById('usernameerror');
      userpasserror = document.getElementById('userpasserror');
      confirmpasserror = document.getElementById('confirmpasserror');
      useremailerror = document.getElementById('useremailerror');


      // //set cookie
      // function setcookie() {
      //     document.cookie = "username=" + username.value;
      //     document.cookie = "userpass=" + userpass.value;
      //     //document.cookie = "gender=" + document.getElementsByTagName("input[type='radio']").value;
      //     document.cookie = "gender=" + gender.value;
      // }


      // //get cookie
      // function getcookie() {
      //     var cookiearray = document.cookie.split(";");
      //     for (i = 0; i < cookiearray.length; i++) {
      //         var namevalueArray = cookiearray[i].split("=");
      //         if (namevalueArray[0] == "username") {
      //             username.value = namevalueArray[1];

      //         } else if (namevalueArray[0] == "userpass") {
      //             userpass.value = namevalueArray[1];

      //         } else if (namevalueArray[0] == "gender") {
      //             //document.getElementsByTagName("input[type='radio']").value = namevalueArray[1];
      //             gender.value = namevalueArray[1];

      //         } else {
      //             alert("cookie not found");


      //         }

      //     }
      // }


      //3-username validation
      username.addEventListener('blur', function() {
          //if username is not valid
          if (!isusernamevalid()) {
              username.focus();
              username.select();
              usernameerror.style.display = "block";
              username.className = "error";
          } else {
              //if username is valid
              usernameerror.style.display = "none";
              username.className = "success";
              userpass.focus();
          }
      }); //end of username validation 

      //4-userpassword validation 
      userpass.addEventListener('blur', function() {
          //if userpassword is not valid
          if (!isuserpassvalid()) {
              userpass.focus();
              userpass.select();
              userpasserror.style.display = "block";
              userpass.className = "error";
          } else {
              //if userpass is valid
              userpasserror.style.display = "none";
              userpass.className = "success";
              confirmpass.focus();
          }
      }); //end of userpass validation

      //5-confirm password validation 
      confirmpass.addEventListener('blur', function() {
          //if confirmpass is not valid
          if (!isconfirmpassvalid()) {
              confirmpass.focus();
              confirmpass.select();
              confirmpasserror.style.display = "block";
              confirmpass.className = "error";
          } else {
              //if userpass is valid
              confirmpasserror.style.display = "none";
              confirmpass.className = "success";
              useremail.focus();
          }
      }); //end of confirmpass validation

      //6-useremail validation 
      useremail.addEventListener('blur', function() {
          //if useremail is not valid
          if (!isuseremailvalid()) {
              useremail.focus();
              useremail.select();
              useremailerror.style.display = "block";
              useremail.className = "error";
          } else {
              //if useremail is valid
              useremailerror.style.display = "none";
              useremail.className = "success";
          }
      }); //end of useremail validation





      // register submit and reset events with form
      document.forms[0].addEventListener('submit', function(e) {

          if (!(isusernamevalid() && isuserpassvalid() && isconfirmpassvalid() && isuseremailvalid() && isradiochacked())) {
              // prevent default
              e.preventDefault();
          } else {
              localStorage.setItem("username", username.value);
              localStorage.setItem("userpass", userpass.value);
              localStorage.setItem("gender", document.querySelectorAll("input[type='radio']:checked")[0].value);
              // setcookie()
              // getcookie()
          }

      }); //end of submit

      document.forms[0].addEventListener('reset', function(e) {
          if (!confirm('Are You Sure To Want To Reset ?')) {
              e.preventDefault();
          } else {
              username.focus();
          }

      }); //end of reset


  }); //end load event



  function isusernamevalid() {
      //return true if username value match
      var usernamepattern = /^[A-Za-z]{6,8}$/;
      if (username.value.match(usernamepattern)) {
          return true;
      } else {
          return false;
      }

  }

  function isuserpassvalid() {
      //return true if userpassword value match
      var userpasspattern = /^[0-9]{4,6}$/;
      if (userpass.value.match(userpasspattern)) {
          return true;
      } else {
          return false;
      }
  }

  function isconfirmpassvalid() {
      //return true if confirmpass value match with userpass value
      if (confirmpass.value == userpass.value) {
          return true;
      } else {
          return false;
      }
  }

  function isuseremailvalid() {
      //return true if userpassword value match
      var useremailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (useremail.value.match(useremailpattern)) {
          return true;
      } else {
          return false;
      }
  }

  //radio button validation
  function isradiochacked() {
      if (document.getElementById("GenderM").checked || document.getElementById("GenderF").checked) {
          return true;

      } else {
          alert("You must select gender.....!");
          return false;
      }
  }
  // to prevent back button in login page
  window.history.forward();

  function noBack() {
      window.history.forward();

  }