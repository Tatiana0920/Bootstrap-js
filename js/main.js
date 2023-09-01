function suma() {
    //declaramos las variables neesarias
    let a=0;
    let b=0;
    let s=0;

    //solicitamos los valores
    a=parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    b=parseInt(prompt("Por favor ingrese el seguno valor a sumar"));
    s=a+b;
    alert("El resultado de la suma es:" + s);
}

function operaciones() {
    alert("Algoritmo que sumará, restará, multipicará y dividirá 2 valores ingresados")
        //declaramos las variables neesarias
        let a=0;
        let b=0;
        let s=0;
        let r=0;
        let m=0;
        let d=0;
        //solicitamos los valores
        a=parseInt(prompt("Por favor ingrese el primer valor"));
        b=parseInt(prompt("Por favor ingrese el seguno valor"));
        s=a+b;
        r=a-b;
        m=a*b;
        d=a/b;
        alert("El resultado de la suma es: " + s + " Resta: " + r + " Multiplicación: " + m + "  División: " + d);      
}

function mayor() {
    alert("Algoritmo que determinará el número mayor de los ingresados")
    let n1=0
    let n2=0

    n1=parseInt(prompt("Ingrese el primer valor"));
    n2=parseInt(prompt("Ingrese el segundo valor"));

    if (n1 == n2) {
        alert("No se pueden números iguales bobohpta")
    }
    else if (n1 > n2) {
        alert(n1 + " es mayor que " + n2);

    }
    else {
        alert(n2 + " es mayor que " + n1);
    }
}

function menor() {
    alert("Algoritmo que determinará el número mayor de los ingresados")
    let n1=0
    let n2=0
    n1=parseInt(prompt("Ingrese el primer valor"));
    n2=parseInt(prompt("Ingrese el segundo valor"));
    if ((n1 == n2) && (n1 == n3)) {
        alert("No se pueden números iguales")
    }
    else if (n1 > n2) {
        alert(n1 + " es mayor que " + n2);
    }
    else {
        alert(n2 + " es mayor que " + n1);
    }
}

//el colegio requiere un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y siete calificaciones, y este le indique si aprobó o reprobó la materia teniendo en cuenta que se aprueba si el puntaje es mayor o igual a 6 

function promediocalificaciones() {
    alert("Algoritmo que determinará si aprueba o noxd jaja ");
        let nombre=0;
        let materia=0;
        let nota1=0;
        let nota2=0;
        let nota3=0;
        let nota4=0;
        let nota5=0;
        let nota6=0;
        let nota7=0;
        nombre=prompt("Ingrese su nombre");
        materia=prompt("Ingrese la materia");
        nota1=parseInt(prompt("Ingrese la primera nota"));
        nota2=parseInt(prompt("Ingrese la segunda nota"));
        nota3=parseInt(prompt("Ingrese la tercera nota"));
        nota4=parseInt(prompt("Ingrese la cuarta nota"));
        nota5=parseInt(prompt("Ingrese la quinta nota"));
        nota6=parseInt(prompt("Ingrese la sexta nota"));
        nota7=parseInt(prompt("Ingrese la septima nota"));
        s=nota1+nota2+nota3+nota4+nota5+nota6+nota7;
        pro=s/7;
        if (pro>=6) {
            alert(nombre + " ,aprobaste " + materia + " ,tu nota final es: " + pro);
        }
        else{
            alert(nombre + " ,reprobaste                                                                                              " + materia + " ,tu nota final es: " + pro);
        }
    }

//se requiere de un sistema de algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equivale, euros y soles:
function conversion() {
    alert("Algoritmo que determinará la equivalencia de dólares en las distintas monedas");
        let dolares=0;
        let pesos= 4118.50;
        let euros=0.92;
        let soles=3.72;
        let con1=0;
        let con2=0;
        let con3=0;
        dolares=parseFloat(prompt("Ingrese los dólares"));
        con1=dolares*pesos;
        con2=dolares*euros;
        con3=dolares*soles;
        alert("la conversion a pesos es: " + pesos + "la conversion a euros es: " + euros + "la conversion a soles es: " + soles);
        }

//un individuo desea invertir su caital en un banco y requiere saber cuanto dinero ganará despues de n numero de años teniendo en cuenta que el banco paga un interes del 1,3% mensual

function cdt() {
    alert("Algoritmo que determinará cuanto dinero ganará despues de n numero de años");
    let cap = parseInt(prompt("¿Cuánto capital desea invertir?"));
    let año = parseInt(prompt("¿Cuantos años desea estar?"));
    let cdt = 0;

    cdt=cap*(0.013)*(año*12);

    alert("esto es igual "+cdt);
    
}

function panelLateral() {
    const panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
    
}

function circulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("circulo");
}
function triangulo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("triangulo");
}
function rombo() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("rombo");
}
function degradado() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("degradado");
}
function horizontal() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("horizontal");
}
function vertical() {
    const figura = document.getElementById("figura");

    figura.classList.toggle("vertical");
}
function moveTop(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("top");
}
function moveRight(){
    const figura2 = document.querySelector("#figura");

    figura.classList.toggle("right");
}
function moveLeft(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("left");
}
function moveBottom(){
    const figura = document.querySelector("#figura");

    figura.classList.toggle("bottom");
}