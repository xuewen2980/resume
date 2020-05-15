!function(){
  //初始化滚动条
  let view = $('#mySlides')
  let controller = {
    view: null, 
    swiper: null,
    swiperOptions: { loop: true, pagination: { el: '.swiper-pagination', }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
  },
    init: function(view){
      this.view = view
      this.initSwiper()
    },
    initSwiper: function(){
      this.swiper = new Swiper (
        this.view.querySelector('.swiper-container'), 
        this.swiperOptions,
        )
      console.log(this.swiper)
     
    }
  }
    controller.init(view)
}.call()
