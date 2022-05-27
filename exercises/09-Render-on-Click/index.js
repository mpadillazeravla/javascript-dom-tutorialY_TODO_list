let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	
	// creamos una funcion que se activa cuando se hace click en el boton //
	
	let para = document.createElement("div"); // crea un div en document y asigna variable
	para.style.background = "yellow"; // le da estilo a ese div
	para.innerHTML = "Hello World"; // mete un helloworld en ese div/variable
	document.body.appendChild(para); // incluye el div/variable en el body del html


});

