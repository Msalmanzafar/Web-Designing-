function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	var g = canvas.createLinearGradient(0,0,100,100);
	g.addColorStop(.0,"blue");
	g.addColorStop(.5,"green");
	g.addColorStop(1,"red");
	canvas.fillStyle=g;
	canvas.fillRect(0,0,100,100);
	
	/*canvas.fillStyle="#DC143C";
	canvas.strokeStyle="red";
	canvas.strokeRect(10,10,100,100);
	canvas.fillRect(10,120,100,100);
	canvas.clearRect(20,130,45,65);*/
}
window.addEventListener("load", doFirst,false);
