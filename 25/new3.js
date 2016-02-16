function getstuff(){
	var list= document.querySelectorAll('#tuna');
	for(var i=0;i<list.length;i++)
	{
		list[i].onclick=talk;
	}
}
function talk(){
	alert('news alert! some one copy you.')
}
window.onload=getstuff;