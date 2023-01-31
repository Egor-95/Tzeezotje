// swiper
const swiper = new Swiper('.swiper', {

    loop: true,



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }


});

// Отправка заявки

$("document").ready(function () {

    $("#feedBack").on("submit", function () {

        let dataform = $(this).serialize()

        $.ajax({
            url: './mail.php',         /* Куда отправить запрос */
            method: 'POST',             /* Метод запроса (post или get) */
            dataType: 'html',          /* Тип данных в ответе (xml, json, script, html). */
            data: dataform,     /* Данные передаваемые в массиве */
            success: function (data) {   /* функция которая будет выполнена после успешного запроса.  */
                alert(data); /* В переменной data содержится ответ от index.php. */
            }
        });

    })
})




