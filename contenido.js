//Bienvenida

let nombre =prompt("Ingrese su nombre completo.");
let edad = parseInt(prompt("Hola "+nombre+", Indique su edad para continuar."));

if(edad>=18){
    alert("Bienvenido "+nombre+" es mayor de edad, puede continuar.");
}else{
    alert("Lo lamentamos "+nombre+" para ingresar al sitio debes ser mayor de edad.");
}

//Calculo de plazo fijo

let tiempo=parseInt(prompt("Para poder simular su plazo fijo, ingrese cantidad de dias:"));
let monto=parseInt(prompt("Ahora ingrese el monto:"));
let tasa;

if (monto<=10000){
    tasa=30;
}
else{
    tasa=35;
}

// Provincia de Santa Fe Imnpuesto a los sellos 1%o
// provincia de San Juan Impuesto a los sellos 0,9%o

class SelladoProvincial{
    constructor(provincia,alicuota){
        this.provincia = provincia.toUpperCase();
        this.alicuota = parseFloat(alicuota);
    }
    mostrarProvincia(){
        return this.provincia;
        return this.alicuota;
    }
}

const provincia1 = new SelladoProvincial("SANTA FE",0.001);
const provincia2 = new SelladoProvincial("SAN JUAN",0.0009);

console.log(provincia1.provincia);
console.log(provincia2.provincia);
console.log(provincia1.alicuota);
console.log(provincia2.alicuota);

let sellado=(prompt("En que provincia te encontras?"));
let sellado2= sellado.toLocaleUpperCase();
let alicuotaSellado=0;

if(sellado2 === provincia1.provincia){
    alicuotaSellado = provincia1.alicuota;
}
else if (sellado2 === provincia2.provincia){
    alicuotaSellado = provincia2.alicuota;
}
else{
    
}

console.log=(alicuotaSellado);

function plazoFijo (tiempo, monto, tasa, alicuotaSellado){
    return (monto*(tasa/100)*(tiempo/365)-(monto*alicuotaSellado));
}
function total (monto, interes) {return (monto + interes)};

let interes=plazoFijo (tiempo, monto, tasa, alicuotaSellado);

alert("Su plazo fijo le dará un interes de "+Math.round(interes));

let inversionTotal= (total (monto, interes));


alert("Usted invertirá $"+monto+" y en "+tiempo+" dias logrará una suma total de "+Math.round(inversionTotal)+".")