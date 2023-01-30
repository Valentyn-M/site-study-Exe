$(document).ready(function () {

   // если фокус на блоке (works)
   $('.works__buttons button, .works__buttons a').on('focus', function (e) {
       $(this).parents('.works__item').addClass('works__item_active');
   })

    // если блок потерял фокус
    $('.works__buttons button, .works__buttons a').on('blur', function (e) {
        $(this).parents('.works__item').removeClass('works__item_active');
    })



    // ширина програс-бара в %
    function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500, animationPosition = 1200) {     // 1-й параметр (node) - название класса элемента, у которго присутствует атрибут data. 2-й параметр (nodeLine) - название класса линий. 3-й (tooltip) - название класса для подсказки. 4-й параметр (animationLength) - скорость анимации (1,5 с). 5-й (animationPosition) - скорость анимации подсказки (1,2 с)
        const progressElement = $(node);                                                    // инициализируем константу (progressElement), которую мы положим в выборку элементов (node)
        progressElement.each(function (value, item) {                                       // перебираем каждый эелемент при помощи функции each
            $(item).find(nodeLine).animate({                                                // берем элемент, ищем в нем нашу линию. Когда находми, применяем функцию animate,
                width: item.dataset.progressPercent+'%'                                     // где анимируем свойство width и в качестве значения ширины подставляем значение из атрибута data и добавляем "%"
            }, animationLength);
            $(item).find(tooltip).css('left', item.dataset.progressPercent+'%').show(animationPosition);   // берем элемент, ищем в нем нашу подсказку. Когда находми, устанавливаем ему css свойство left (трибута data и добавляем "%"). Затем плавно его паказываем
        });
    }

    let animate = true;                                                     // чтобы запускалось только один раз
    $(window).scroll(function () {                                          // срабатывает только при прокрутке
        if($('.skills').offset().top <= $(window).scrollTop() + 300) {      // когда окно браузера от верха составит 300px
            if(animate) {                                                   // проверяем первый ли раз замускается функция анимирования
                moveProgressBar('.progress__item', '.progress__line', '.progress__tooltip');    // запускаем нашу функцию
            }
            animate = false;                                                // после выполения функции отключем повторный запуск
        }
    });



    // если фокус на блоке (blog)
    $('.blog__info a').on('focus', function (e) {
        $(this).parents('.blog__item').addClass('blog__item_active');
    })

    // если блок потерял фокус
    $('.blog__info a').on('blur', function (e) {
        $(this).parents('.blog__item').removeClass('blog__item_active');
    })



    // Подключение карусели
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,     // убираем точки навигации
        navText:[],     // убираем стрелки навигации - передаем параметру пустой массив
        items:5,        // устанавливаем количество элементов карусели, которые должны отображаться - 5
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            512:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    })


});


/* Проверка jQuery
alert(jQuery.fn.jquery);
*/