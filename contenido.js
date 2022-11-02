//Bienvenida

let montoInversion = document.getElementById("monto");
let plazoInversion = document.getElementById("plazo");
let provinciaSeleccionada = document.getElementById("provincia");
let formulario = document.getElementById("formulario");
let tasa;
let interes;

//Determinacion de tasa a tomar


//Validacion de formulario completo
formulario.addEventListener("submit",validar);

function validar(e){
    if((montoInversion.value=="")||(plazoInversion.value=="")){
        e.preventDefault();
        alert("Ingrese Monto y Plazo válidos");
    }
}

//Funcion para generar el calculo

let calculo = document.getElementById("miBoton");
calculo.addEventListener("click", () => {
    if (montoInversion.value<=10000){
        tasa=30;
    }
    else{
        tasa=35;
    }
    let nroMonto= Number(montoInversion.value);
    let nroPlazo= Number(plazoInversion.value);
    interes = calcularInteres(nroMonto,tasa,nroPlazo);
    interesOk = interes.toFixed(2);
    total= calcularTotal(nroMonto,interes)
    totalOk= total.toFixed(2);
    total = calcularTotal (nroMonto,interes);
    console.log(calcularInteres(nroMonto,tasa,nroPlazo));
    console.log(calcularTotal(nroMonto,interes));
    console.log(tasa);
    console.log(interesOk);
    document.getElementById("tablabody").innerHTML += `
        <tr>
        <th scope="row">$${nroMonto}</th>
        <td>${tasa}%</td>
        <td>${nroPlazo} dias</td>
        <td>$${interesOk}</td>
        <td>$${totalOk}</td>  
        </tr>`;
}    
)
function calcularInteres(montoInv,laTasa,plazoInv) {
    return ((montoInv * (laTasa / 100)) * (plazoInv / 365));
}

function calcularTotal(nroMontox,interesx) {
    return (nroMontox + interesx);
}

// let interes= calcularInteres (tiempo, capital, tasa);

// let inversionTotal= (calcularTotal (montoInve,laTasaInve));



/*
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

*/
