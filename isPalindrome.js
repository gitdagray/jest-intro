const reverseString = require('./reverseString')

function isPalindrome(word) {
    return word.toLowerCase() === reverseString(word).toLowerCase()
}

module.exports = isPalindrome