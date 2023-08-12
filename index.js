function isPalindrome (word){
    //check if word is empty or if word is a single character
    IF (word <= 1)
    return true;
} 

else {
        // Compare the first and last characters
        if (word[0] === word[word.length - 1]) {
            // Remove the first and last characters, and call the function again
            return isPalindrome(word.slice(1, -1));
        } else {
            return false; // It's not a palindrome
        }
    }









