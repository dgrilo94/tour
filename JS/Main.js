// $(document).ready(function(){
//   $('.slick').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: true,
//     // dotsClass: '.dots',

//   });
//   });


// $(document).ready(function () {

//   var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + '</span>';
//       },
//     }
//   });


  $( document ).ready(function() {
    //labels para os nomes das tours
    let labels = ['label1', 'label2', 'label3'];
    let description =['batatas com sardinha', 'atum ', 'javali']


    var swiper = new Swiper('.swiper-container', {
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span>'+ (labels[index]) + '</span>' + '<div>' + (description[index]) + '</div>' + '</span>';
        },
      },
    });



  });