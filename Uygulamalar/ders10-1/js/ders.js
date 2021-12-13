document.body.style.backgroundColor="blue";
//sayfa arka planını mavi yap

console.log(document.characterSet);
//sayfa karakter kodlamasını yaz

console.log(document.documentURI);
//sayfa adresini yaz

var imgCollection=document.images;
//sayfada ki img etiketlerinin bir listesi imgCollection değişkenine atandı
for ( i = 0; i < imgCollection.length; i++) {
    console.log(imgCollection[i]); 
}