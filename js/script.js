// swiper

const swiper = new Swiper('.recall-swiper', {
    speed: 600,
    loop: true,



    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }


});

var mySwiper = new Swiper('.ambiance-swiper', {
    speed: 600,
    spaceBetween: 20,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: 5000,
    autoplayStopOnLast: false, // loop false also

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 20,
    //
    slidesPerView: 2,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,

    breakpoints: {
        // when window width is <= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        // when window width is <= 480px
        590: {
            slidesPerView: 2,
            spaceBetween: 10
        },
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





//map




ymaps.ready(init);
function init() {

    var myMap = new ymaps.Map("map", {

        center: [52.07401979734621, 4.286727905273438],
        zoom: 10


    });
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [55.8, 37.8]
        }
    });
    var myPlacemark = new ymaps.Placemark([52.07401979734621, 4.286727905273438], {}, {
        iconLayout: 'default#image',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myGeoObject);


}


// anim-item

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);

}