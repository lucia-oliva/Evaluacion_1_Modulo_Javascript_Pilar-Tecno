function iniciar(){
    const presentacion = document.getElementById("presentacion");
    presentacion.style.display = "none";
    mostrarCalculadora();
}

function mostrarCalculadora(){
    const calculadora = document.getElementById("calculadoraEstructura");
    calculadora.style.display = "block";
}

function sumar(){
 const numero1 = parseFloat(document.getElementById("numero1").value);
 const numero2 = parseFloat(document.getElementById("numero2").value);
 if (isNaN(numero1) || isNaN(numero2)) {
     alert("Por favor, ingrese números válidos.");
     return;
 }
 const calculo = numero1 + numero2;
 const mostrarResultado = document.getElementById("resultado");
 mostrarResultado.textContent = calculo;
}

function restar(){
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    const calculo = numero1 - numero2;
    const mostrarResultado = document.getElementById("resultado");
    mostrarResultado.textContent = calculo;   
}

function multiplicar(){
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    const calculo = numero1 * numero2;
    const mostrarResultado = document.getElementById("resultado");
    mostrarResultado.textContent = calculo;
}

function dividir(){
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    if (numero2 === 0) {
           const mostrarResultado = document.getElementById("resultado");
              mostrarResultado.textContent = "Indefinido";
        return;
    }
    const calculo = numero1 / numero2;
    const mostrarResultado = document.getElementById("resultado");
    mostrarResultado.textContent = calculo;   
}