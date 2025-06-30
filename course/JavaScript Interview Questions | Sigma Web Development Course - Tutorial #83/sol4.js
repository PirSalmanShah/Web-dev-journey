// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


function PasswordManger(password) {
    let len = false;
    let num = false;
    let lower = false;
    let upper = false;
    let character;
    if (password.length >= 8) {
        len = true;
    }
    for (const element of password) {
        character = element.charCodeAt(0)
        if ((character >= 48) && (character <= 57)) {
            num = true;
        }
        else if ((character >= 65) && (character <= 90)) {
            upper = true;
        }
        else if ((character >= 97) && (character <= 122)) {
            lower = true;
        }

    }

    if(len==true&&num==true&&upper==true&&lower==true){
        console.log("strong password")
    }
    else{
        console.log('at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit');
        
    }
}

PasswordManger("SalmanShah1")

