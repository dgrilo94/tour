  $( document ).ready(function() {
    //labels para os nomes das tours
    let labels = ['Most popular', 'The historical', 'The religious' , 'Natural wonder'];
    let description =['Sintra', 'Lisbon', 'Fátima', 'Arrábida' ]


    var swiper = new Swiper('.swiper-container', {
      loop: true,
      // autoplay: {
      //   delay: 3000,
      // },
      // effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span>'+ (labels[index]) + '</span>' + '<div>' + (description[index]) + '</div>' + '</span>';
        },
      },
    });
  });