// popup para ampliar vista de la imagen principal

var	overlay_popup_img = document.getElementById('overlay-popup-img'),
    popup_img = document.getElementById('popup-img'),
    btn_expand_img = document.getElementById('btn-expand-img');
    btn_cerrar_popup_img = document.getElementById('popup-img-cerrar');
    
btn_expand_img.addEventListener('click', function(){
    overlay_popup_img.classList.add('overlay-activated');
    popup_img.classList.add('popup-activated');

    // $('body').addClass('stop-scrolling');
    document.querySelector('body').classList.add('stop-scrolling');
});

overlay_popup_img.addEventListener('click', function(){
    // if($(event.target).attr('id') == $(this).attr('id')) {
    if(window.event.target.id == "overlay-popup-img") {
        overlay_popup_img.classList.remove('overlay-activated');
        popup_img.classList.remove('popup-activated');

        document.querySelector('body').classList.remove('stop-scrolling');
        // console.log(window.event.target.id);
    }
});

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