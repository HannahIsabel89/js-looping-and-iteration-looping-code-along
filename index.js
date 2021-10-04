// Code your solutions in this file

// question 1 (for loop)
function writeCards(arr, event) {
    let thankYouCards = [];
    for (let i = 0; i < arr.length; i++) {
        thankYouCards.push(`Thank you ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}
//console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

// question 2 (while loop)
function countDown (num) {
    while (num > 0) {
        console.log(num);
        num -= 1;
    }
    console.log(num);
};

console.log(countDown(5));
