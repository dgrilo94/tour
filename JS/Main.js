  $( document ).ready(function() {
    //labels para os nomes das tours
    let labels = ['label1', 'label2', 'label3'];
    let description =['batatas com sardinha', 'atum ', 'javali']


    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span>'+ (labels[index]) + '</span>' + '<div>' + (description[index]) + '</div>' + '</span>';
        },
      },
    });
  });