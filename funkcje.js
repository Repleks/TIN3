function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

function getType(argument) {
    return typeof argument;
}

function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

console.log(fibonacci(6));
console.log(isPalindrome("kamilslimak"));
console.log(getType('kamil'));
console.log(amountToCoins(46,coins = [25, 10, 5, 2, 1]));
