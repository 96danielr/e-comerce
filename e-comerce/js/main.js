

$(function () {


    let equipo = $('#carrito').offset().top



    $('#carrito').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 2600
        }, 600);
    });

    


});