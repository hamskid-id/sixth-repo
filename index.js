const menu = document.querySelector('.head-div nav');
const hamburger = document.querySelector('.hamburger');
const tl= new TimelineMax();

hamburger.onclick = function myfunction(){
	menu.classList.toggle('togglecls');
	tl.fromTo(menu,0.5,{x:"-300px"},{x:"0px",width:"50%"});
}

