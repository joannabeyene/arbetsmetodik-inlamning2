function palindromeString(palindrome) {
    const reversedString = palindrome.split("").reverse().join("");
    
    if (palindrome == reversedString) {
        return true;
    }
    else {
        return false
    }
}

module.exports = palindromeString;