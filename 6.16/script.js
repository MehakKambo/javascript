// Your solution goes here 


function isStrongPassword(password) {
    if(password.length >=8 && 
        !(password.includes("password")) &&
        !(password.toLowerCase() == password)) {
            return true;
        } 
    return false;
}