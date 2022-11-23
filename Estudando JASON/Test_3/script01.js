
// Transforma O Json para Objeto 
let titulo01 = document.getElementById('tituloCard');
let myObj01 = {name:"John", age:30, city:"New York"};

// Insere no Html
document.getElementById("tituloCard").innerHTML = ` TituloCard `;
document.getElementById("caso01").innerHTML = `Nome:`+ ` `+ myObj01.name+` Idade: `+myObj01.age + ` City:` + myObj01.city;

