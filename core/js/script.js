/*PRELOADER*/
document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.querySelector("#preloader");
		if(!preloader.classList.contains("done")){
			preloader.classList.add("done");
		}	
	}, 2000);
}
/*GALLERY*/
baguetteBox.run('.gallery');
/*SCROLLTOP BUTTON*/
var scrollbt = document.querySelector('.scroll_top');
window.onscroll = function() {scrollButton()}
function scrollButton(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		scrollbt.style.display = 'block';
	}
	else{
		scrollbt.style.display = 'none';
	}
}
scrollbt.addEventListener('click', function(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
/*SCROLL REVEAL*/
window.sr = ScrollReveal({
	duration: 1000,
	easing: 'ease',
	mobile: true,
	reset: false,
	viewFactor:.4,
});

  sr.reveal('.anim',{
  	distance: '400px',
  	origin: 'bottom',
});
  
  sr.reveal('.anim00',{
  	distance: '200px',
  	origin: 'right',
});
	
  sr.reveal('.anim01',{
  	distance: '200px',
    origin: 'left',
});
 