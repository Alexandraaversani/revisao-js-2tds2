let metaLivros = 5; 

let livrosLidos = ["Harry Potter", "Trono de Vidro", "Para Todos Garotos Que Já Amei"];

for (let i = 0; i < livrosLidos.length; i++) {
    console.log(livrosLidos[i]);
}

if (livrosLidos.length >= metaLivros) {
    console.log("Parabéns! Você atingiu sua meta de leitura!");
} else {
    let faltam = metaLivros - livrosLidos.length;
    console.log("Você está quase lá! Faltam " + faltam + " livros para atingir sua meta.");
}
