/*
Checks if password is at least 8 chars long,
doesn't include "password" and
has at least one upper case char.
*/
function isStrongPassword(password) {
    if(password.length >=8 && 
        !(password.includes("password")) &&
        !(password.toLowerCase() == password)) {
            return true;
        } 
    return false;
}