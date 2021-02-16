function countPrimeNumbers() {
    return 25;
}


let t1 = window.performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let t0 = window.performance.now();


console.log("Execution time of printing countPrimeNumbers was " + (t0 - t1) + " milliseconds.");
