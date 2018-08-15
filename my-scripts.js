//set count 
if(localStorage.getItem("count") == null){
	localStorage.setItem("count", 0)
}
// update count in html
function update(){
	document.getElementById("count").innerHTML = localStorage.getItem("count");

}

update();

// add one to count 
function plusOne(){
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1); update(); 
}
// reset (bite) count 

function reset(){
	if (confirm("Could you not resist the Tootsie Roll center?")){
		localStorage.setItem("count", 0);
		update();}
	}