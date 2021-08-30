//ENTIDADES
//Clase
class nuevaTarea {
    constructor(tarea, id) {
        this.tarea = tarea;
        this.id = Date.now();
    }
}
//VARIABLES

// Array donde se almacenan las tarea pendientes
let nuevasTareas = []

// Selectores 
let botonGuardar = document.getElementById("guardar")
let table = document.getElementById("mostrarTareasPendientes")

//FUNCIONES
//Funcion que guarda los datos y los envia a localStorage
function guardar() {
    let tarea = document.getElementById("tarea").value
    let guardarLocal = JSON.parse(localStorage.getItem("pendientes"))
    
    if (localStorage.getItem("pendientes") != null) {
        let index = guardarLocal.length + 1
        let usuario = new nuevaTarea(tarea, index)
        guardarLocal.push(usuario)
        localStorage.setItem("pendientes", JSON.stringify(guardarLocal))
    } else {
        localStorage.clear()
        let index = 1
        let usuario = new nuevaTarea(tarea, index)
        nuevasTareas.push(usuario)
        localStorage.setItem("pendientes", JSON.stringify(nuevasTareas))
    }
}
//Funcion que muestra las tareas pendientes
function mostrarTareas() {
    let mostrar = JSON.parse(localStorage.getItem("pendientes"))
    if (mostrar != null) {
        mostrar.forEach(element => {
            let tabla = document.createElement("tr")
            let th1 = document.createElement("th")
            th1.setAttribute("class", "col-2")
            th1.textContent = `${element.tarea}`
            tabla.appendChild(th1)
            let td1 = document.createElement("td")
            td1.setAttribute("class", "col-2")
            tabla.appendChild(td1)
            let button = document.createElement("button")
            button.setAttribute("class", "btnBorrar")
            button.setAttribute("onclick", `borrarDatos(${element.id})`)
            button.textContent = "X"
            td1.appendChild(button)
            table.appendChild(tabla)
        });
    } else {
        alert("No tenes tareas pendientes");
    }
}

//funcion para borrar los datos
function borrarDatos(id) {
    let pendientes = JSON.parse(localStorage.getItem("pendientes"))
    let actualizar = pendientes.filter(pendientes => pendientes.id != id)
    localStorage.setItem("pendientes", JSON.stringify(actualizar))
    location.reload()
}
//EVENTOS 
botonGuardar.addEventListener("click", guardar)

//LOGICA
mostrarTareas()

//PETICION AJAX

/*const prediccionJSON = "./prediccion.json"
$.getJSON(prediccionJSON, function (resultado, estado) {
   if(estado === "success"){
       let texto = resultado;
       $("body").prepend(`<div>
                            <h3>${texto}</h3>
                        </div>`);
  //console.log(resultado)
}
})*/
        
//Declaramos la url que vamos a usar para el GET
const URLGET = "./prediccion.json"
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            
            let miPrediccion2 = (respuesta[Math.round(Math.random()*(respuesta.length-1))]);           
            console.log(miPrediccion2.prediccion);
            let fraseDelDia = JSON.stringify(miPrediccion2.prediccion);
            $(".frase").append(`<h4>
            ${fraseDelDia}
            </h4>`
            )
          }}
    );
