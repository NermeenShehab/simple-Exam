    // login form
    window.addEventListener('load', function() { //start load event



        //1-sellect items
        username = document.getElementById('username');
        userpass = document.getElementById('userpass');

        username.focus();

        //2-select error message
        usernameerror = document.getElementById('usernameerror');
        userpasserror = document.getElementById('userpasserror');

        // get username and password from LocalStorage
        var localUserName = localStorage.getItem("username");
        var localPassword = localStorage.getItem("userpass");




        //3-username validation
        username.addEventListener('blur', function() {
            //if username is not valid
            if (!isusernamevalid()) {
                username.focus();
                username.select();
                username.className = "error";
                usernameerror.style.display = "block";
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
                userpass.className = "error";
                userpasserror.style.display = "block";

            } else {
                //if userpass is valid
                userpasserror.style.display = "none";
                userpass.className = "success";

            }
        });













        // register submit and reset events with form
        document.forms[0].addEventListener('submit', function(e) {

            if (!(isusernamevalid() && isuserpassvalid())) {
                // prevent default
                e.preventDefault();
                username.focus();
            }

        }); //end of submit


        document.forms[0].addEventListener('reset', function(e) {
            if (!(confirm('Are You Sure To Want To Reset ?'))) {
                e.preventDefault();
            } else {
                username.focus();
            }

        }); //end of reset


        // username validation 
        function isusernamevalid() {
            if (username.value == localUserName) {
                return true;
            } else {
                return false;
            }
        }

        // password validaition 
        function isuserpassvalid() {

            if (userpass.value == localPassword) {
                return true;
            } else {
                return false;
            }
        }

        // password validaition 
        function isuserpassvalid() {

            if (userpass.value == localPassword) {
                return true;
            } else {
                return false;
            }
        }








    }); //end load event

    // // to prevent back button in quiz page
    // window.history.forward();

    // function noBack() {
    //     window.history.forward();
    // }


    // function isusernamevalid() {
    //     var usernamepattern;
    //     if (username.value.match(usernamepattern)) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }

    // function isuserpassvalid() {
    //     //return true if userpassword value match
    //     var userpasspattern = /^[0-9]{4,6}$/;
    //     if (userpass.value.match(userpasspattern)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }