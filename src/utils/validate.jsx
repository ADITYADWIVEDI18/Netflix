export const checkValidData = (email,password) => {
    const isEmailValid =( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email);
    const isPasswordValid = (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password);

    if(!isEmailValid)return "Your email is not valid !";
    if(!isPasswordValid)return "Your Password is not valid !";

    return null;
}