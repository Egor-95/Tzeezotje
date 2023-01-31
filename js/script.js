// swiper
const swiper = new Swiper('.swiper', {

    loop: true,



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }


});

// form

$('#my_form_email').submit(function () {



    $.post(
        'post-email.php', 
        $("#my_form_email").serialize(),  		

        function (msg) { 
            $('#my_message_email').html(msg);

            
        }
    );

    return false;

    
});

const form = document.querySelector('.form');
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
})





