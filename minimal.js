// number of arguments
function numOfArguments() {
    console.log(arguments.length)
}
numOfArguments(1, 2, 3, 'a')

// compare nums
alert('Enter two numbers and we will compare them. If first number is smaller we return -1. If greater: 1. If both are equal: 0.')
function compareNums(a = prompt('Enter first number'), b = prompt('Enter second number')) {
    let num;
    if (a < b) {
        num = -1;
    } else if (a > b) {
        num = 1;
    } else if (a == b) {
        num = 0;
    } else {
        num = NaN;
    }
    alert(num)
}
compareNums()
alert('Next')

//factorial
function factorialize(num = prompt('Type in a number and we will show a factorial of this number.')) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
alert(factorialize())
alert('Next')

//add nums
alert('Enter 3 digits and we will combine them into a number')
function addNumbers(a = prompt('Enter the first digit'), b = prompt('Enter the second digit'), c = prompt('Enter the third digit')) {
    let combo = Number(a + b + c)
    alert(combo)
}
addNumbers()
//alternative
function createNum(...digits){
    return +digits.join('')
}
alert('Moving on')

//area
function area(a = prompt('Enter the length of a rectangle'), b = prompt('Enter the width of a rectangle')){
    let s = 0
    if (b){
        s = a * b
    }else {
        s = a * a
    }
    alert(`The area of a rectangle is ${s}`)
}
area()
