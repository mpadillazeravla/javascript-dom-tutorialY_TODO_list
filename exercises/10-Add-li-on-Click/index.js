let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.getElementById("myList")
	let para = document.createElement("li");
	para.innerHTML = "Another more element"; 
	document.body.appendChild(para);
	ul.appendChild(para)
});

// probar a cambiar "another more" por numero e ir sumando cada vez que se hace clic
// He encontrado algo de este tipo:
// let numero = 4
// button.onclick = () => {
// numero++;
