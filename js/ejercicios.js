//1
function CalculadoraDeEdad(fecha){
    const hoy = Date.Today();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    const nombre = prompt("Ingrese su nombre: ");
    console.log("Hola " + nombre + ", tienes " + edad + " años");
}

//2
function TirandoFruta(){
    const frutas = ["mandarina", "sandia", "naranja", "pomelo", "melon", "uva", "frutilla", "arandanos", "manzana", "ciruela"];
    let i = 0;
    const fruta = prompt("Ingrese una fruta: ").ToLowerCase();
    while(fruta != frutas[i] && i < frutas.length){
        i++;
    };
    if(i < frutas.length){  
        console.log("Sí, tenemos " + fruta + "!");
    }
    else{
        console.log("No, no tenemos " + fruta + "!");
    }
}

//3
function ComparandoDatosYTipos(){
    //A
    console.log(10 == '10');
    
    //B
    console.log(10 === '10');

    //C
    console.log(typeof 10.6);

    //D

}

//4
function YoObjeto(){
    const Ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: 1536,
        poblacion: 3120612,
        extensión: 203
    }

    const valores = Object.values(Ciudad);
    for(let i=0; i< valores.length; i++){
        console.log(valores[i]);
    }
}

//5
function DobleDeElementos(numeros){
    let doble;
    for(let i = 0; i < numeros.length; i++){
        doble.push(numeros[i]*2);
    }
}

//6
function TriánguloDeAsteriscos(){
    //A
    for(let i = 1; i <= 5; i++){
        console.log("*" * i);
    }

    //B
    let j = 4;
    for(let i = 1; i <= 9; i += 3){
        if(i == 4){
            i--;
        }
        console.log("-" * j + "*" * i + "-" * j);
        j--;
    }
}

//7
function NombresConA(){
    const nombres = prompt("Ingrese al menos dos nombres separados por una coma: ");
    for(let i = 0; i<nombres.length; i++){
        
    }
}

//8
function ReemplazarPalabras(){
    const cadena = prompt("Ingrese una cadena de texto: ");
    const reemplazar = prompt("Ingrese una palabra de la cadena que quiera reemplazar: ");
    const reemplazo = prompt("Ingrese la palabra por la que quiere reemplazar: ");

    console.log(cadena.replaceAll(reemplazar, reemplazo));
}

//9
function CortarTexto(){

}

//10
function StringConSeparador(){

}

//11
function CalculadoraDeRecaudacion(){
    const objetosPerdidos = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma: ");
    
}