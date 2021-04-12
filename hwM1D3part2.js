/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const charCount = (str) => {
    max = 0
    resultArr = []
    mostUsed = ''
    charObj = {}
    let lower = str.toLowerCase()
    let strArr = lower.split(' ')
    let oneWord = strArr.join('')
    let noSpaceArr = oneWord.split('')
    noSpaceArr.forEach (
        char => {
            let rep = 0
            if ((/[a-zA-Z]/).test(char)) {
                noSpaceArr.forEach (
                    c => {
                        if (char === c) { rep += 1 }
                    }
                )
                charObj[char] = rep
            }
        }
    )
    for (const prop in charObj) {
        if (charObj[prop] > max) {
            max = charObj[prop]
            mostUsed = prop
        }
    }
    resultArr.push(charObj)
    resultArr.push(mostUsed)
    return resultArr
}
// console.log(charCount('!!!!!!!!Alan eats a banana')[1])

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const anagrams = (str1, str2) => {
    let str1chars = charCount(str1)[0]
    let str2chars = charCount(str2)[0] 
    let letters1 = Object.getOwnPropertyNames(str1chars);
    let letters2 = Object.getOwnPropertyNames(str2chars);
    let falseCount = 0
    if (letters1.length !== letters2.length) { 
        return false 
    }
    letters1.forEach (
        lett => {
            if (str1chars[lett] !== str2chars[lett]) {
                falseCount += 1
            } 
        }
    )
    return falseCount > 0 ? false : true
}
// console.log(anagrams('ciao', 'ioca'))

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

const anagrams2 = (str, arr) => {
    correctOnes = []
    arr.forEach (
        word => {
            if (anagrams(str, word)) {
                correctOnes.push(word)
            }
        }
    )
    return correctOnes
}
// console.log(anagrams2('ciao', ['Mickey', 'paolo', 'Sailor', 'ioca', 'table', 'caoi']))

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const palindrome = (str) => {
    let lower = str.toLowerCase()
    let strArr = lower.split(' ')
    let oneWord = strArr.join('')
    let noSpaceArr = oneWord.split('')
    let noSpaceCopy = noSpaceArr.slice(0)
    let reversed = noSpaceCopy.reverse()
    let falseCounter = 0 
    reversed.forEach (
        (char, i) => {
            if (char !== noSpaceArr[i]) {falseCounter ++}
        }
    )
    return falseCounter > 0 ? false : true
}
// console.log(palindrome('i topi non avevano nipoti'))

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (n) => {
    let stringNum = n.toString()
    let stringArr = stringNum.split('')
    stringArr.reverse()
    return parseInt(stringArr.join(''))
}
// console.log(reverseInt(789))

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const stepShape = (n) => {
    let count = 0
    let hashes = '#'
    let blank = n - 1
    let blankSpace = ''
    for (i=0; i<blank; i++) {
        blankSpace += '-'
    }
    while (count < n) {
        console.log(hashes + blankSpace.slice(0, blank))
        hashes += '#'
        blank --
        count ++
    }
}
// console.log(stepShape(18))

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverse = (str) => {
    let stringArr = str.split('')
    stringArr.reverse()
    return stringArr.join('')
}
// console.log(reverse('ciao!'))
 
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

const divide = (arr, size) => {
    let allArrays = []
    for (i=0; i<arr.length; i += size) {
        allArrays.push(arr.slice(i, i + size))
    }
    return allArrays
}
// console.log(divide([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const piramydShape = (n) => {
    let count = 0
    let hashes = '#'
    let blank = n - 1
    let blankSpace = ''
    for (i=0; i<blank; i++) {
        blankSpace += '-'
    }
    while (count < n) {
        console.log(blankSpace.slice(0, blank) + hashes + blankSpace.slice(0, blank))
        hashes += '##'
        blank --
        count ++
    }
}
// console.log(piramydShape(10))

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
