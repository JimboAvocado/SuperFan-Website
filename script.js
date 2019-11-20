var a= document.getElementById("screen");
var b= document.getElementById("furnace");
var c= document.getElementById("furnace2");
function makeOpaque(){
	a.classList.toggle("opaque");
}

function toggleMusic() {
	document.getElementById("music").play();
}

function pause(){
	document.getElementById("music").pause();
}

function burn(){
	b.classList.toggle("none");
	c.classList.toggle("none");
}
