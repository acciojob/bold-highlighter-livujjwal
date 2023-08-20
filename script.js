function highlight() {
const strong = document.querySelectorAll("strong");
	for (let i of strong) {
		i.className = "green";
	}
	console.log(strong)
}


function return_normal() {
   const strong = document.querySelectorAll("strong");
	for (let i of strong) {
		i.className = "normal";
	}
} 

