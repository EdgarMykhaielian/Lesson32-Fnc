function isPerfect(number = prompt('Type in any positive number and we will tell if it is perfect.')) {
    if (number <= 0) {
        alert('Your number is not positive!')
    }
    else {
        let div = 1;
        let sumDiv = 0;
        while (div < number) {
            if (number % div == 0) {
                sumDiv += div;
            }
            div++;
        }
        if (sumDiv == number) {
            alert(`Number - ${number} is perfect.`);
        } else {
            alert(`Number - ${number} is NOT perfect.`);
        }
    }
}
isPerfect()
alert('Next')