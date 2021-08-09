var up=false,down=false,left=false,right=false;
var x = window.innerWidth/2-200/2;
var y = window.innerHeight/2-200/2;
document.addEventListener('keydown',press)
function press(event){
	if(event.keyCode == 119 || event.keyCode == 87){
		up=true;
	}
	if(event.keyCode == 115 || event.keyCode == 83){
		down=true;
	}
	if(event.keyCode == 97 || event.keyCode == 65){
		left=true;
	}
	if(event.keyCode == 100 || event.keyCode == 68){
		right=true;
	}
}

document.addEventListener('keyup',release)
function release(event){
	if(event.keyCode == 119 || event.keyCode == 87){
		up=false;
	}
	if(event.keyCode == 115 || event.keyCode == 83){
		down=false;
	}
	if(event.keyCode == 97 || event.keyCode == 65){
		left=false;
	}
	if(event.keyCode == 100 || event.keyCode == 68){
		right=false;
	}
}

function gameloop(){
	var div=document.querySelector('div');
	if(up){
		y=y-10;
	}
	if(down){
		y=y+10;
	}
	if(left){
		x=x-10;
	}
	if(right){
		x=x+10;
	}
	if(x<0){
		x=0;
	}
	if(y<0){
		y=0;
	}
	if(x>(window.innerWidth-217)){
		x=window.innerWidth-217;
	}
	if(y>(window.innerHeight-217)){
		y=window.innerHeight-217;
	}
	div.style.marginLeft=x+'px';
	div.style.marginTop=y+'px';
	window.requestAnimationFrame(gameloop);
}
window.requestAnimationFrame(gameloop);