let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

// recorro el array de paises y hago un appenchild al select introduciendole los paises con iteracion
let select = document.getElementById("mySelect");
for (let i = 0; i<countries.length; i++){
	let pais = document.createElement("option");
	pais.value = countries[i]; // aqui le asigno a cada desplegable un valor, que es el propio pais, para poder usarlo despues
	pais.innerHTML = countries [i];
    select.appendChild(pais); // importante esto, con DOCUMENT.APPENCHILD(PAIS), no los introduce
							// porque hay que introducirlos en el select, no en document en general.
}

// aqui hago el alert para que muestre alerta con el pais que seleccionemos
let option = document.querySelectorAll("#mySelect") // recupero el myselect y le asigno option
option.forEach((element) => { // para cada (foreach) option, añado un eventlistener para que haga X cada vez que cambie
	element.addEventListener("change", () => {

		element.value == -1 ? "" : alert(element.value) // si el valor es -1 (el select your...), no hago nada
													//si tiene valor (un pais), muestro alerta con el valor
	})
	
});


