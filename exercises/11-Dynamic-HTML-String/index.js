let today = new Date();
let year = today.getFullYear();
let myString =`<p>Hello!</p> <strong>My friend</strong>, we are in the year `;

document.write(myString);
document.body.append(year); // con esto agrego el año al final del body, despues del string

// lo normal sería haberlo hecho con ${year} detras del string, pero así es más DOM


