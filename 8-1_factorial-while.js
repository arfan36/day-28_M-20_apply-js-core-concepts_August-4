function factorial(number) {
    let i = 1;
    let result = 1;     // initial value result = 1
    while (i <= number) {
        result = result * i;
        console.log(i, result);
        i++;
    }
    return result;
}
const number = 4;
const fact = factorial(number);
console.log(`Factorial of ${number}:`, fact);