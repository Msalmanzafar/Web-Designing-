/*function doFirst(){
	barsize=600;
	myvideos=document.getElementById('myvideos');
	playButton=document.getElementById('playButton');
	bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	
	playButton.addEventListener('clik',playOrPause, false);
	bar.addEventListener('clik',clickedBar, false);
}
function playOrPause()
{
	if(!myvideos.paused && !myvideos.ended)
	{
		myvideos.pause();
		playButton.innerHTML='play';
		window.clearInterval(updateBar);
	}else{
		myvideos.play();
		playButton.innerHTML='pause';
		updateBar=setInterval(update, 500);
	}
}
function update(){
	if(!myvideos.ended)
	{
		var size=parseInt(myvideos.currentTime*barsize/myvideos.duration);
		progressBar.style.width=size+'px';
	}else{
		progressBar.style.width='0px';
		playButton.innerHTML='play';
		window.clearInterval(updateBar);
	}
}
function clickedBar(e){
	if(!myvideos.paused && !myvideos.ended){
		var mouseX=e.pageX-bar.offsetleft;
		var newtime=mouseX*myvideos.duration/barsize;
		myvideos.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	}
}
window.addEventListener('load',doFirst,false);

*/
