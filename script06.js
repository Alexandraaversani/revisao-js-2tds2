let armas = ['Laser', 'Mísseis', 'Canhão', 'Garras', 'Lança-Chamas'];

let ataques = [];

ataques[0] = 'Robô Titã';

ataques.push(armas[0]); 
ataques.push(armas[2]); 
ataques.push(armas[1]); 
ataques.push(armas[3]); 
ataques.push(armas[4]); 

console.log("Nome: " + ataques[0]);

for (let i = 1; i < ataques.length; i++) {
    console.log("Ataque " + i + ": " + ataques[i]);
}