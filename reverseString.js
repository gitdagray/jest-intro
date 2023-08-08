function reverseString(word) {
    return word.split('').reverse().join('').replaceAll(',', '')
}

module.exports = reverseString