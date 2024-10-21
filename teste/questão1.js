function isFibonacci(num) {
    let a = 0, b = 1;
    while (a <= num) {
        if (a === num) {
            return true;
        }
        let temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}


let numero = 21;  

if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
