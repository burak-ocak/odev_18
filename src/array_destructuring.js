//Bu kısımda object destructuring'in array'lere uyarlanmış halini göreceğiz.

const sayilar = [1, 2, 3, 4, 5];
const [birinci, ikinci, ucuncu, dorduncu, besinci] = sayilar;
console.log(birinci, ikinci, ucuncu, dorduncu, besinci);

//Aynı şekilde array'lerde de rest/spread operatörünü kullanabiliriz.

const [birinciEleman, ...kalanElemanlar] = sayilar;

console.log(birinciEleman);
console.log(kalanElemanlar);

//Bu kısım ise react'da kullanımıdır.
function SayiElamanlar([birinci, ikinci]){
    return `İlk sayı: ${birinci} 'dir. İkinci sayı: ${ikinci} 'dir.`;
}