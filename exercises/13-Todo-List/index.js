
// funcion que se activa al pulsar ENTER
document.querySelector('#addToDo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
addli () }
});


// funcion para añadir una tarea
const addli = () => {
    let input = document.getElementById("addToDo")
    let ul = document.querySelector("ul")
    ul.innerHTML += `<li>
    <span><i class="fa fa-trash"></i></span> ${input.value}
</li>`;
    input.value= "" // aqui le decimos que vuelva a poner a 0 el input una vez que metemos un valor
    deletetask() // llamo a la funcion borrar aqui para que vaya actualizando el valor de los elementos y deje borrar todo

        }
    
        // funcion para borrar una tarea
        function deletetask () {
            let close = document.querySelectorAll("span"); // lo habia llamado con fa pero asi no lo selecciona
            console.log(close);
            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                    this.parentNode.remove()
                }
            }
        }
        // el primer intento de borrar fue así y no funcionaba:
            // const list = document.querySelector("ul");
            // const divpadre = document.querySelector(".container");
            // list.removeChild(list.children[i]);

        deletetask() 
        // llamo a la funcion aqui fuera para que inicialice desde el principio borrar y cargue los elementos que hay
        // sino la cargo al cargar la pagina, no me deja borrar desde el principio
    
