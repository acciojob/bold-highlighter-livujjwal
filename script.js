function highlight() {
const strong = document.querySelectorAll("strong");
	for (let i of strong) {
		i.style.color = "green";
	}
}


function return_normal() {
   const strong = document.querySelectorAll("strong");
	for (let i of strong) {
		i.className = "black";
	}
} 
}
