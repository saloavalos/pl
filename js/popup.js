// popup para ampliar la imagen del producto

var	overlay_popup_img = document.getElementById('overlay-popup-img'),
    popup_img = document.getElementById('popup-img'),
    btn_expand_img = document.getElementById('btn-expand-img');
    btn_cerrar_popup_img = document.getElementById('popup-img-cerrar');
    
// Make visible the popup
btn_expand_img.addEventListener('click', function(){
    overlay_popup_img.classList.add('overlay-activated');
    popup_img.classList.add('popup-activated');
    document.querySelector('body').classList.add('stop-scrolling');
});

// Hide popup if there is a click outside (in the dim bg)
overlay_popup_img.addEventListener('click', function(){
    if(window.event.target.id == "overlay-popup-img") {
        overlay_popup_img.classList.remove('overlay-activated');
        popup_img.classList.remove('popup-activated');

        document.querySelector('body').classList.remove('stop-scrolling');
        // console.log(window.event.target.id);
    }
});

// Hide popup if there is a click in the X
btn_cerrar_popup_img.addEventListener('click', function(){
    overlay_popup_img.classList.remove('overlay-activated');
    popup_img.classList.remove('popup-activated');

    document.querySelector('body').classList.remove('stop-scrolling');
});


// overlay_popup_img.addEventListener('click', function(e){
// 	e.preventDefault();
// 	overlay_popup_img.classList.remove('overlay-activated');
// 	popup_img.classList.remove('popup-activated');

// 	// $('body').removeClass('stop-scrolling');
// 	document.querySelector('body').classList.remove('stop-scrolling');
// });