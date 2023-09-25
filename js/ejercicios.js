//1
function CalculadoraDeEdad(fecha){
    console.clear();

    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    const nombre = prompt("Ingrese su nombre: ");
    console.log("Hola " + nombre + ", tienes " + edad + " anios");

}

//2
function TirandoFruta(id){
    console.clear();

    const frutas = ["mandarina", "sandia", "naranja", "pomelo", "melon", "uva", "frutilla", "arandanos", "manzana", "ciruela"];

    const resultado = document.getElementById(id);
    resultado.innerHTML = frutas;
    
    const fruta = prompt("Ingrese una fruta: ").toLowerCase();
    if(frutas.includes(fruta)){  
        resultado.innerHTML += ("<br>Si­, tenemos " + fruta + "!");
    }
    else{
        resultado.innerHTML += ("<br>No, no tenemos " + fruta + "!");
    }
    
}

//3
function ComparandoDatosYTipos(id){
    console.clear();
    const resultado = document.getElementById(id);
    //A
    resultado.innerHTML = ("Comparar si 10 es igual a '10' con ==/" + (10 == '10'));

    //B
    resultado.innerHTML += ("<br>Comparar si 10 es igual a '10' con ===/" + (10 === '10'));
    //La diferencia que encontramos es que con el triple igual compara no solo el valor, sino tambien el tipo de dato, y por lo tanto va a dar false.

    //C
    resultado.innerHTML += ("<br>¿De qué tipo de dato es 10.6?/" + (typeof 10.6));

    //D
    resultado.innerHTML += ("<br>¿Es cierto que para JavaScript true es == 1?/" + (true==1));
    //Es cierto, y de esto podemos interpretar que false == 0, por que compara un valor y no el tipo de dato. O sea que lo que interpreta como lenguaje binario.
}

//4
function YoObjeto(id){
    console.clear();
    const resultado = document.getElementById(id);

    const Ciudad = {
        nombre: "Buenos Aires",
        fechaFundacion: 1536,
        poblacion: 3120612,
        extension: 203
    }


    resultado.innerHTML = Object.keys(Ciudad);
    resultado.innerHTML += "<br>" + Object.values(Ciudad);
}

//5
function DobleDeElementos(id,numeros){
    console.clear();
    const resultado = document.getElementById(id);
    resultado.innerHTML = numeros.map(numero=>numero*2);
}

//6
function TrianguloDeAsteriscos(){
    console.clear();

    //A
    const constante1 = 5;
    for(let i = 1; i <= constante1; i++){
        console.log("*".repeat(i));
    }

    console.log("");
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
function NombresConA(id){
    console.clear();

    const nombres = prompt("Ingrese al menos dos nombres separados por una coma: ");
    const nombresConA = nombres.split(',').filter(nombre=>nombre[0] === 'A');
    document.getElementById(id).innerHTML = nombresConA;
}

//8
function ReemplazarPalabras(id){
    console.clear();

    const cadena = prompt("Ingrese una cadena de texto: ");
    const reemplazar = prompt("Ingrese una palabra de la cadena que quiera reemplazar: ");
    const reemplazo = prompt("Ingrese la palabra por la que quiere reemplazar: ");

    document.getElementById(id).innerHTML = cadena.replaceAll(reemplazar, reemplazo);
}

//9
function CortarTexto(id)
{
    console.clear();

    const cadena = prompt("Ingrese una cadena de texto: ");
    const num = prompt("¿En que posicion quiere cortar la cadena?: ");  
    document.getElementById(id).innerHTML = cadena.slice(0,num);
}

//10
function StringConSeparador(id)
{
    console.clear();

    const cadena = prompt("Ingrese una cadena de texto donde cada string este separado por una (,): ");
    const cadena2 = cadena.replaceAll(",","-");
    document.getElementById(id).innerHTML = cadena2;
}

//11
function CalculadoraDeRecaudacion(id){
    console.clear();
    
    const pedidos = prompt("Ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma (ej --> Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25): ");
    let suma = 0;

    const res = pedidos.split(',');

    res.forEach(re => {
        const [nombre, precio] = re.split(':');
        suma += parseFloat(precio);
    });

    document.getElementById(id).innerHTML = `Total: $${suma.toFixed(2)}`;
}
