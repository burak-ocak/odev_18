/*
const kullanici = {
    isim: "Burak",
    yas: 20,
};

const {isim, yas} = kullanici;

Bu yapılan iş bizim objelerimiz arasında verdiğimiz değerleri direkt olarak bir değişkene atama işlemidir. Yani aslında biz burada kullanici adındaki objenin içerisinde isim anahtarını ve
değerini direkt olarak isim adlı bir değişkene atamış olduk. Yaş için de aynı şekildedir.
*/

//Peki bizim objemizden birçok anahtar ve onların değeri olsun ancak biz onların içerisinden sadece iki tanesini alıp geri kalanları bize obje olarak vermesini istersek nasıl yaparız?

const kullanici = {
    isim: "Burak",
    yas: 20,
    adres: "Istanbul",
    memleket: "Kayseri",
    meslek: "Ogrenci"
};

const {isim, yas, ...kalanlar} = kullanici;

console.log(isim);
console.log(yas);
console.log(kalanlar);

//yani bu durumda bizim işimize yarayan operatör rest veya spread operatörüdür bunlar da "..." yazımı ile oluşur. Yani geri kalan her şeyi bize tek bir obje halinde verir.

//Bu yazım ise bunun react'da kullanımıdır.
function KullaniciBilgiler({isim, yas}){
    return `${isim} adlı kullanıcı ${yas} yaşındadır`;
}