export const checkValidData = (name,email,password) =>{
    const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.text(name);
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);

if(!isNameValid) return "Name is not valid";
if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordValid) return "Password is not valid";

return null;
};