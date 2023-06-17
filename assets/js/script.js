//    // language//

let langItem = Array.from(document.querySelectorAll('#langs li a'));

document.getElementById('langBtn').addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    langItem.forEach((item) => {
        item.addEventListener('click', function () {
            item.parentElement.parentElement.previousElementSibling.querySelector('span').innerText = item.innerText;
        })
    })
})
// document.addEventListener('click', (event) => {
//    if (!event.target.closest('#langs')) {
//       document.body.querySelector('#langs').classList.remove('active')
//    }
// })

// accordion
let accardionBtn = Array.from(document.getElementsByClassName('accardionBtn'));

accardionBtn.forEach((item) => {
    item.addEventListener('click', function () {
        item.nextElementSibling.classList.toggle('active');
        item.querySelector('svg').classList.toggle('active');
        item.classList.toggle('active')
    })
})

// mobile menu
let hamIcon = document.getElementById('hamIcon');
let overlay = document.getElementById('overlay');

hamIcon.addEventListener('click', function () {
    overlay.classList.toggle('active');
    hamIcon.classList.toggle('active');
    document.querySelector('header > div > ul').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
})
// filter
let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item) => {
    item.addEventListener('click', function () {
        filterBtn.forEach((items) => { items.classList.remove('active') });
        filterContent.forEach((items) => { items.classList.remove('active') });
        item.classList.toggle('active')
        item.nextElementSibling.classList.toggle('active');
    })
})
// swiper

var swiper = new Swiper(".Cars", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});
var swiper = new Swiper(".brands", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
});
var swiper = new Swiper(".services", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
});
// datapicker

jQuery(function () {
    $('.date').daterangepicker({
        "locale": {
            "format": "MM/DD/YYYY",
            "separator": " - ",
            "applyLabel": "اجرا",
            "cancelLabel": "کنسل",
            "fromLabel": "از",
            "toLabel": "تا",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1
        }, "startDate": "06/01/2023",
        "endDate": "06/07/2023"
    }, function (start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
});

// 
lightbox.option({
    'resizeDuration': 300,
    'albumLabel': 'تصویر %1 از %2'
});