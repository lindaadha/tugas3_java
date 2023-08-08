
const prompt = require('prompt-sync')({sigint: true});

const x = prompt('Masukkan Angka: ');

if (x <= 0) {
    console.log("Tidak bisa input bilangan negatif")
}
else if  (x % 2 != 0) {
    console.log("Tidak bisa input bilangan ganjil")
}
else {
    akarKuadrat = Math.sqrt(x)
    console.log(`Akar kuadrat dari ${x} adalah ${akarKuadrat}`);
}



