/* Profe, a lo largo de todos los ejercicios hice uso de console.log y 
console.dir para poder resoverlos de mejor manera, pero los fui borrando
para evitar confusiones ya que utilizé constantemente la consola */ 

//EJERCICIO 1 

let diccionario=[{palabra:"peregrino", definicion:"Persona Que anda o viaja por tierras extrañas que presentan dificultades.",   },{     palabra:"berenjena",     definicion:"planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas", },{     palabra:"bucle",     definicion:"secuencia de instrucciones de código que se ejecuta repetidas veces.//Curva en forma de rizo que se forma en determinadas cosas. ", },{     palabra:"estetoscopio",     definicion:"Instrumento médico que sirve para explorar los sonidos producidos por los órganos de las cavidades del pecho y del abdomen.", },{     palabra:"recoleccion",     definicion:"Acción o actividad de recolectar los frutos de la tierra.//Conjunto de frutos recolectados.", }]

//con estas 2 variables, busqué el recuadro celeste.
let div = document.getElementsByTagName("div")
let cuadroceleste = div[0]

function buscarpalabra(){

let palabraingresada = document.getElementById("palabra")

if(palabraingresada.value ==="peregrino"){
    cuadroceleste.textContent = diccionario[0].definicion
}else{
    if(palabraingresada.value ==="berenjena"){
        cuadroceleste.textContent = diccionario[1].definicion
    }else{
        if(palabraingresada.value ==="bucle"){
            cuadroceleste.textContent = diccionario[2].definicion
        }else{
            if(palabraingresada.value ==="estetoscopio"){
                cuadroceleste.textContent = diccionario[3].definicion
            }else{
                if(palabraingresada.value ==="recoleccion" || palabraingresada.value ==="recolección"){
                    cuadroceleste.textContent = diccionario[4].definicion
                }else{
                    if(palabraingresada.value ===""){
                        //Me pareció cómodo colocar esta acción para que se muestre así al abrir la página.
                        cuadroceleste.textContent = "Aquí se mostrará la definición de la palabra que usted ingrese, si nuestro diccionario la posee."
                    }else{
                        cuadroceleste.textContent = "Lo sentimos, nuestro diccionario no dispone de esta esta definición por el momento."
                    }
                }
            }
        }
    }
}

}

buscarpalabra() /*Aunque ya llamé la funcion en HTML, hubo uno de los ejercicios
optativos que tuve que llamarla tanto en HTML como en JS para que funcione,
por eso acá decidí hacer lo mismo*/

//-----------------------------------------------------------------------------

//EJERCICIO 2

let carrito = document.getElementsByClassName("circulo")[0]
let botoncomprar = document.querySelectorAll("button")[1]
let contadorunidades = 0
let preciototal = 0
let cuadrototal = document.getElementsByClassName("total")[0]


function agregaralcarrito(){
    contadorunidades++
    carrito.textContent= contadorunidades

    preciototal = preciototal + 2500
    cuadrototal.textContent= "TOTAL: " + preciototal
}

function sacarproducto(){

    if(contadorunidades > 0 && preciototal > 0){
        contadorunidades = contadorunidades-1
        carrito.textContent= contadorunidades

        preciototal = preciototal - 2500
        cuadrototal.textContent= "TOTAL: " + preciototal
    }

}

//-----------------------------------------------------------------------------

//EJERCICIO 3 

let usuarioAdministrador = "Cosme Fulanito";      
let password = "admin123";
let productos=[{  nombre:"remera",  precio:2500,  stock:40 },{  nombre:"buzo",  precio:5750, stock:32 }] 


function ejercicio3(){
    let usuarioingresado = prompt("Ingrese su nombre de usuario:")
    let contraseñaingresada = prompt("Ingrese su contraseña:")

    if(usuarioingresado === usuarioAdministrador && contraseñaingresada === password){
        alert("Eres el administrador. Clickee Aceptar para continuar.")

        let nuevoproducto = { nombre: prompt("Ingrese el nombre del nuevo producto")}
        nuevoproducto.precio = prompt("Ingrese el precio del nuevo producto:")
        nuevoproducto.stock = prompt("Ingrese el stock del producto:")

        productos.push(nuevoproducto)

        console.log(productos)
    }
}

/* ejercicio3() -> dejo comentado como llamar la función para que no se ejecute
al principio de todo */ 

//-----------------------------------------------------------------------------

//EJERCICIO 4

let cancion = ["mi", "barba", "tiene", "tres", "pelos"]
let label= document.querySelectorAll("label")[1] //creé esta etiqueta en HTML
let nuevoparrafo = document.createElement("p")

label.appendChild(nuevoparrafo)

nuevoparrafo.textContent= cancion[0] + " " + cancion[1] + " " + cancion[2] + " " + cancion[3] + " " + cancion[4]

/* Decidí que el código escrito entre las líneas 96 y 102 queden por
fuera de la función, ya que cuando lo escribía por dentro, no lograba responder
a la consigna. */ 

function ejercicio4(){

    let borrarpalabra = document.querySelectorAll("input")[1]  

    if(borrarpalabra.value === cancion[0]){

        nuevoparrafo.textContent= cancion[1] + " " + cancion[2] + " " + cancion[3] + " " + cancion[4]

    }else{
        if(borrarpalabra.value === cancion[1]){
            
            nuevoparrafo.textContent= cancion[0] + " " + cancion[2] + " " + cancion[3] + " " + cancion[4]

        }else{

            if(borrarpalabra.value === cancion[2]){

                nuevoparrafo.textContent= cancion[0] + " " + cancion[1] + " " + cancion[3] + " " + cancion[4]

            }else{

                if(borrarpalabra.value === cancion[3]){

                    nuevoparrafo.textContent= cancion[0] + " " + cancion[1] + " " + cancion[2] + " " + cancion[4]

                }else{

                    if(borrarpalabra.value === cancion[4]){

                        nuevoparrafo.textContent= cancion[0] + " " + cancion[1] + " " + cancion[2] + " " + cancion[3]

                    }
                }
            }
        }
    }


}

//-----------------------------------------------------------------------------

//EJERCICIO 5

function ejercicio5(){
    let tema = document.getElementsByClassName("tema")[0]

    tema.style.backgroundColor="darkblue"

    let imagen = document.createElement("img")

    tema.appendChild(imagen)

    imagen.setAttribute("src","./imagenes/murcielago.png")
}









