/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumTriple = (n1, n2) => n1 === n2 ? (n1 + n2) * 3 : n1 + n2

// console.log(sumTriple(2, 3))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check50 = (n1, n2) => (n1 + n1 === 50 || n1 === 50 || n2 === 50) ? true : false

// console.log(check50(25, 25))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (str, pos) => {
    arr = str.split('')
    arr.splice(pos, 1)  
    return arr.join('')
}
// console.log(removeChar('mariolino', 2))

/*
4)
 Create a function to find the largest of three given integers.
*/

const findLargest = (n1, n2, n3) => Math.max(n1, n2, n3)

// console.log(findLargest(1, 5, 3))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkRange = (n1, n2) => {
    const checkInRange = (n) => {
        if (n > 40 && n < 60) {
            return `${n} is in 40...60 range` 
        } else if (n >= 70 && n <= 100) {
            return `${n} is in 70...100 range`
        } else {
            return `${n} is in neither range`
        }
    }
    console.log(checkInRange(n1),'//', checkInRange(n2))
} 
// checkRange(30, 80)

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

const copyNTimes = (str, n) => {
    arr = []
    for(i = 0; i < n; i++) {
        arr.push(str)
    }
    return arr.join()
} 
// console.log(copyNTimes('i love pizza', 3))

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const checkCity = (city) => city.startsWith('Los') || city.startsWith('New') ? city : null
// console.log(checkCity('New York'))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumArray = (arr) => {
    const reducer = (acc, val) => acc + val
    return arr.reduce(reducer)
}
// console.log(sumArray([1, 2, 3]))

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const includes1or3 = (arr) => arr.includes(1) || arr.includes(3) ? true : false  
// console.log(includes1or3([1, 4]))

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const notIncludes1or3 = (arr) => !arr.includes(1) || arr.includes(3) ? true : false  
// console.log(notIncludes1or3([1, 4]))


// 11)
// Create a function to find the longest string from a given array of strings.

const longestString = (arr) => {
    max = arr[0]
    arr.forEach (
        el => {
            if (el.length > max.length) {max = el}
        }       
    )
    return max   
}
// console.log(longestString(['ciao', 'sono', 'un', 'ragazzo']))

// 12)
// Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const findAngle = (n) => {
    if (n < 90) {
        return 'acute'
    } else if (n === 90) {
        return 'right'
    } else if (n > 90 && n < 180) {
        return 'obtuse'
    } else if (n === 180) {
        return 'straight'
    } 
}
// console.log(findAngle(180))

// 13)
// Create a function to find the index of the greatest element of a given array of integers

const biggestInd = (arr) => {
    max = arr[0]
    arr.forEach (
        (el, i) => {
            if (el > max) {max = i}
        }       
    )
    return max   
}
// console.log(biggestInd([1, 2, 3, 5, 4, 8, 2]))

// 14)
// Create a function to get the largest even number from an array of integers.

const biggestEven = (arr) => {
    max = arr[0]
    arr.forEach (
        el => {
            if (el > max && el % 2 === 0) {max = el}
        }       
    )
    return max   
}
// console.log(biggestEven([1, 2, 3, 5, 4, 9, 2]))

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

const posNeg = (n1, n2) => (n1 < 0 && n2 > 0 || n1 > 0 && n2 < 0) ? true : false 
// console.log(posNeg(2, -1))

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const threeUpper = (str) => {
    if (str.length < 3) {
        return str.toUpperCase()
    } else if (str.length >= 3) {
        let lowStr = str.toLowerCase()
        let lowArr = lowStr.split('')
        for (i=0; i<3; i++) {
            lowArr[i] = lowArr[i].toUpperCase()
        }
        return lowArr.join('')
    }
}
// console.log(threeUpper('supersonic'))

// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 otherwise return 80.

const sumRange = (n1, n2) => {
    if (n1 + n2 >= 50 && n1 + n2 < 80) { return 65 }
    if (n1 + n2 < 50 || n1 + n2 >= 80) { return 80 }
}
// console.log(sumRange(30, 32))

// 18)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

const numToName = (n) => {
    nameResult = ''
    if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
        if (n % 3 === 0) {nameResult += 'Diego'}
        if (n % 5 === 0) {nameResult += 'Riccardo'}
        if (n % 7 === 0) {nameResult += 'Stefano'}
    } else {
        nameResult = n
    }
    return nameResult
}
// console.log(numToName(30))

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

const getAcronym = (str) => {
    arrAcro = []
    arr = str.split(' ')
    arr.forEach (x => arrAcro.push(x[0].toUpperCase()))
    const reducer = (acc, val) => acc + val
    return arrAcro.reduce(reducer)
}
// console.log(getAcronym('juventus football club'))