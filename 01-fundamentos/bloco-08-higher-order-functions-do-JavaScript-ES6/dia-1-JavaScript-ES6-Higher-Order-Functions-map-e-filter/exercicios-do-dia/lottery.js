const numberCheck = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    return callback(myNumber, number) ? 'Lucky day, you won' : 'try Again!';
};

console.log(lotteryResult(2, numberCheck));