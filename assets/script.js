function printerror(Id, Msg) {
    document.getElementById(Id).innerText = Msg;
}

function validateform() {
    var name = document.forms["Form"]["name"].value;
    var email = document.forms["Form"]["email"].value;
    var mobile = document.forms["Form"]["mobile"].value;
    var gender = document.querySelector('input[name="gender"]:checked');

    var nameErr = emailErr = mobileErr  = genderErr = true;

    if (name == "") {
        printerror("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name)) {
            printerror("nameErr", "Please enter a valid name");
        } else {
            printerror("nameErr", "");
            nameErr = false;
        }
    }

    if (email == "") {
        printerror("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (!regex.test(email)) {
            printerror("emailErr", "Please enter a valid email address");
        } else {
            printerror("emailErr", "");
            emailErr = false;
        }
    }

    if (mobile == "") {
        printerror("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (!regex.test(mobile)) {
            printerror("mobileErr", "Please enter a valid 10-digit mobile number");
        } else {
            printerror("mobileErr", "");
            mobileErr = false;
        }
    }

    if (!gender) {
        printerror("genderErr", "Please select your gender");
    } else {
        printerror("genderErr", "");
        genderErr = false;
    }

    return !(nameErr || emailErr || mobileErr || genderErr);
}


