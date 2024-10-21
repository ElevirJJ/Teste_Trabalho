function contarA(str) {
    return str.toLowerCase().split('a').length - 1;
}


let texto = "Análise de Algoritmos";  

let quantidade = contarA(texto);
console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);
