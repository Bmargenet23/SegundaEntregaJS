//Bienvenida

let montoInversion = document.getElementById("monto");
let plazoInversion = document.getElementById("plazo");
let provinciaSeleccionada = document.getElementById("provincia");
let formulario = document.getElementById("formulario");
let tasa;
let interes;


//Validacion de formulario completo
formulario.addEventListener("submit",validar);

function validar(e){
    if((montoInversion.value=="")||(plazoInversion.value=="")){
        // e.preventDefault();
        alert("Ingrese Monto y Plazo válidos");
    }
    e.preventDefault(); 
}

//Funcion para generar el calculo

let calculo = document.getElementById("miBoton");
calculo.addEventListener("click", () => {
    //Determinacion de tasa a tomar
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
    document.getElementById("tablabody").innerHTML = `
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

//Eleccion de modo pantalla por parte del usuario
//localStorage.setItem("modo",modo);
let principal = document.getElementById("principal");
let botonModo = document.getElementById("mode");
let modo = localStorage.getItem("modo");

if(modo != null){
    if(modo == "blue"){
        document.body.className = modo;
        principal.className="container-fluid blue bg-gradient"+modo;
        botonModo.innerText="Green Mode";
    }
}else{
    modo = "green";
}

//evento del boton
botonModo.onclick = () => {
    if(modo == "green"){
        document.body.className="blue";
        principal.classList.remove("green");
        principal.classList.add("blue");
        botonModo.innerText="Green Mode";
        modo = "blue";
    }else{
        document.body.className="green";
        principal.classList.remove("blue");
        principal.classList.add("green");
        botonModo.innerText="Blue Mode";
        modo = "green";
    }
    localStorage.setItem("modo",modo);
}
