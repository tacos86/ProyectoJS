//FUNCIONES

const tema = () => {
    if(localStorage.getItem("modo") == "Dark"){
        aclarar()
    } else {
        oscurecer()
    }
}

//Creo la función para cuando le de click al botón, pase a modo oscuro la página
const oscurecer = () => {    
    $("body").css("background-color","#404040");
    $(".container").css("background-color","#F2F2F0");
    $("h1").css("background-color","#262626");
    $("h1").css("color","white");
    $("label").css("color","black");
    $("#modoOscuro").css("background-color","#ff4f89");
    document.getElementById("modoOscuro").textContent = "Light"
    localStorage.setItem("modo","Dark");
}

//Creo la función para volver al modo claro de la página
const aclarar = () => {
    $("body").css("background-color","#ffa3c1");
    $(".container").css("background-color","#f1f5f8");
    $("h1").css("background-color","#ff4f89");
    $("h1").css("color","#494a4b");
    $("label").css("color","#494a4b");
    $("#modoOscuro").css("background-color","#9b254a");
    $(".frase").css("background-color","#FFFFA5");
    $(".frase").css("color","#494a4b");
    document.getElementById("modoOscuro").textContent = "Dark"
    localStorage.setItem("modo","Light");
}

//SELECTORES
$("#modoOscuro").click(tema);
if (localStorage.getItem("modo").tipo == "Dark") {
    oscurecer()
} else {
   aclarar()
}