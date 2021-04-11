/*
var marka;
console.log(marka);

marka = prompt("marka giriniz: ") ;
console.log(marka);

var model=prompt("model giriniz: ");
console.log(marka+" "+model);

var maxhiz = prompt("max hız:");
var yakitdeposu = prompt("yakıt deposu kaç litre:");
console.log(yakitdeposu * 5.60);

var otomotik = prompt("otomatikmi");
console.log(otomotik);

console.log(marka + ' '+ model+ ' '+ yakitdeposu + 
' litre yakit deposuna sahip ve '+ maxhiz+ 'km hız yapmaktadır.'+
'Peki araç otomatikmidir?'+ otomotik); 
*/


var ad = prompt("adınızı giriniz: ");
var ogrno = prompt("ögr no:");
var cinsiyet = prompt("cinsiyet:");
var ders = prompt("ders adı: ");
var not1 = prompt("not 1:");
var not2 = prompt("not 2:");
var otralam = (Number(not1) + Number(not2)) / 2; 

console.log(ogrno + " numaralı " + ad +"("+cinsiyet+")"+ " isimli öğrencinin "+ ders + " dersinden aldığı ortalama "+ otralam)