(function () {

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAxWICpS24ioiQEMgVgoJz04WUx1iCtDwg",
        authDomain: "progetto-donna.firebaseapp.com",
        databaseURL: "https://progetto-donna.firebaseio.com",
        storageBucket: "progetto-donna.appspot.com",
    };
    firebase.initializeApp(config);


    // Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnResetPassword = document.getElementById('btnResetPassword');


    //Add login event
    btnLogin.addEventListener('click', function() {

        firebase.auth().signInWithEmailAndPassword(txtEmail.value, txtPassword.value).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (txtEmail.value != "" && txtPassword.vlue != "") {
                alertify.alert("Email o password errate!");
            }
        // ...
        });

    });

}());