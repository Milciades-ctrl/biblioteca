var conta = 0;
var imag = [];
function inicio() {
var diapos = document.getElementById("diapositivas");
while (diapos.childNodes.length > 0){
if (diapos.getElementsByTagName("img")[0]==diapos.firstChild){
imag[imag.length] = diapos.removeChild(diapos.firstChild);
}
else diapos.removeChild(diapos.firstChild);
} } 
function adelante() {
conta++;
if (conta >= imag.length) conta = 0;
ponerImagen()
}
function atras() {
conta--;
if (conta < 0 ) conta = imag.length - 1;
ponerImagen();
}
function ponerImagen() {
var diapos = document.getElementById("diapositivas");
if (diapos.childNodes.length==0)
diapos.appendChild(imag[conta]);
else diapos.replaceChild(imag[conta],diapos.childNodes[0]);
}
inicio();
ponerImagen();