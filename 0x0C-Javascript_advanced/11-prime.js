function countPrimeNumbers() {
    return 25;
}

let start3 = window.performance.now();
for (let count = 0; count < 100; count++) {
    countPrimeNumbers();
}
let end3 = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end3 - start3) + " milliseconds.");
