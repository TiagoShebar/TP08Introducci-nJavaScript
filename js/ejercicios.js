//Falta en todos hacer lo del DOM


//1
function CalculadoraDeEdad(fecha){
    //no funciona
    const hoy = new Date();
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
    const fruta = prompt("Ingrese una fruta: ").toLowerCase();
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
    //falta el D

    //A
    console.log(10 == '10');
    
    //B
    console.log(10 === '10');
    //La diferencia que encontramos es que con el triple igual compara no solo el valor, sino también el tipo de dato, y por lo tanto va a dar false.

    //C
    console.log(typeof 10.6);

    //D
    console.log(true==1);
    //Es cierto, y de esto podemos interpretar que false == 0, por que compara un valor y no el tipo de dato. O sea que lo que interpreta como lenguaje binario.
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
        console.log(doble[i]);
    }
}

//6
function TriánguloDeAsteriscos(){
    //A
    const constante1 = 5;
    for(let i = 1; i <= constante1; i++){
        console.log("*".repeat(i));
    }

    //B
    const constante2 = 5;
    let j = 1;
    let h;
    for(let i = 0; i < constante2; i++){
        h = constante2*2-j;
        console.log("-".repeat(h/2)+ "*".repeat(j) + "-".repeat(h/2));
        j+=2;
    }
}

//7
function NombresConA(){
    const nombres = prompt("Ingrese al menos dos nombres separados por una coma: ");
    const nombresConA = nombres.split(',').filter(nombre=>nombre[0] === 'A');
    resultado.innerHTML = nombresConA;
}

//8
function ReemplazarPalabras(){
    const cadena = prompt("Ingrese una cadena de texto: ");
    const reemplazar = prompt("Ingrese una palabra de la cadena que quiera reemplazar: ");
    const reemplazo = prompt("Ingrese la palabra por la que quiere reemplazar: ");

    console.log(cadena.replaceAll(reemplazar, reemplazo));
}

//9
function CortarTexto()
{
    const cadena = prompt("Ingrese una cadena de texto: ");
    const num = prompt("¿En que posicion quiere cortar la cadena?: ");  
    console.log(cadena.slice(num));
}

//10
function StringConSeparador()
{
    const cadena = prompt("Ingrese una cadena de texto donde cada string este separado por una (,): ");
    const cadena2 = cadena.replaceAll(",","-");
    console.log(cadena2);
}

//11
function CalculadoraDeRecaudacion(){
    //no funciona
    const pedidos = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma (ej --> Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25): ");
    let antes = 0;
    let suma = 0;

    let resultado=pedidos.split(',');
    for(let i=0;i<resultado;i++){
        if(a){
            resultado.slice(resultado[i]);
        }
    }
    /*for(let i = 0; i<pedidos.length; i++){
        if(pedidos[i] == ':'){
            pedidos.slice(antes,pedidos[i].indexOf(':'));
            antes = pedidos[i].indexOf(':');
        }
    }
    antes = 0;
    for(let i = 0; i<pedidos.length; i++){
        if(pedidos[i] == ','){
            suma += pedidos.indexOf(0,',');
            pedidos.slice(antes,pedidos[i].indexOf(','));
            antes = pedidos[i].indexOf(',');
        }
    }*/
    console.log(suma);
}