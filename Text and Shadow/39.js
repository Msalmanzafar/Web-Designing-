function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsety = 4;
	canvas.shadowBlur = 6; 
	canvas.shadowColor = 'rgba(0,0,255,.5)';
	
	canvas.font="bold 33px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("First Line",200,100);
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsety = 4;
	canvas.shadowBlur = 6; 
	canvas.shadowColor = 'rgba(255,0,0,.5)';
	
	canvas.font="bold 33px Tahoma";
	canvas.textAlign="end";
	canvas.strokeText("Second Line",300,200);
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsety = 4;
	canvas.shadowBlur = 6; 
	canvas.shadowColor = 'rgba(0,255,0,.5)';
	
	canvas.font="bold 33px Tahoma";
	canvas.textAlign="end";
	canvas.strokeText("Third Line",400,300);
}
window.addEventListener("load",doFirst,false);