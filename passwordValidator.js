function validatePassword(password) {
    const hasNumber = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const LENGTH = password.length >= 8;
    return LENGTH && hasNumber && hasLetter;
}