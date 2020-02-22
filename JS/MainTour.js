$( document ).ready(function() {
    //labels para os nomes das tours
    let labels = ['label1', 'label2', 'label3'];
    let description =['batatas com sardinha', 'atum ', 'javali']


    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000,
      },

      effect: 'fade',

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });