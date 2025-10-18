// Inicializa todos los carruseles .carousel de la página
document.querySelectorAll('.carousel').forEach((carousel) => {
    const swiperEl = carousel.querySelector('.swiper');
    const prevBtn = carousel.querySelector('.btn-prev');
    const nextBtn = carousel.querySelector('.btn-next');

    new Swiper(swiperEl, {
        loop: true,
        spaceBetween: 30,
        navigation: {
            prevEl: prevBtn,
            nextEl: nextBtn,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 1 },
            992: { slidesPerView: 3, slidesPerGroup: 1 },
        }
    });
});