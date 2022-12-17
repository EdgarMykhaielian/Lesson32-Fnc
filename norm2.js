function isPerfect(number) {
    let div = 1;
    let sumDiv = 0;
    while (div < number) {
        if (number % div == 0) {
            sumDiv += div;
        }
        div++;
    }
    if (sumDiv == number) {
        return true;
    } else {
        return false;
    }
}
alert('In this task we will find all perfect numbers in a range of numbers.')

function range(min = prompt('Type in the first positive number as a beggining of the range.', '1'), max = prompt('Type in the end of the range.', '100')) {
    if (min <= 0 || max <= min) {
        alert('Your range is invalid')
    } else {
        let arrPerfect = []
        for (let i = min; i <= max; i++) {
            if (isPerfect(i)) {
                arrPerfect.push(i)
            }
        }
        alert(`Perfect numbers are: ${arrPerfect}`);
    }
}
range()

