/* ===========================================
   TEKNOCAK - GÜVENLİ ARAYÜZ JS DOSYASI
   (Tüm sayfalarda çalışır)
   =========================================== */

// 1. Navbar (Global)
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// 2. Navbar Kullanıcı Dropdown (Global)
const dropdownToggle = document.getElementById('userbtn');
const dropdownMenu = document.getElementById('dropdownMenu');

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle("dropdown-menu-show");
    });
}


// 3. Carousel Slider (Sayfaya Özel)
const swiperElement = document.querySelector('.swiper');
if (swiperElement) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}


// 4. Faq List Animasyonu (Sayfaya Özel)
const faqs = document.querySelectorAll('.faq-list');
if (faqs.length > 0) {
    faqs.forEach(faq => {
        const ques = faq.querySelector('.ques');
        if (ques) {
            ques.addEventListener('click', () => {
                faq.classList.toggle('active-faq');
            });
        }
    });
}

// 5. Yarışma Sidebar Animasyonu (Sayfaya Özel)
function initDetailPageScrollspy() {
    const sidebar = document.querySelector('.content-sidebar');
    if (!sidebar) {
        return;
    }

    const sections = document.querySelectorAll('.detail-card[id]');
    const navLinks = sidebar.querySelectorAll('a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}
initDetailPageScrollspy();