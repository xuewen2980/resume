!function(){
  //滚动条滚动 导航标签高亮
  var view = $('#topNavBar')
  var controller = {
    view: null,
    init: function(view){
      this.view = view
      this.bindEvents()
      // this.bindEvnets.call(this)
    },
    bindEvents: function(){
      var view = this.view
      window.addEventListener('scroll', (x) => {
        if(window.scrollY > 0){
          this.active()
        }else{
          this.deactive()
        }
      })
    },
    active: function(){
      this.view.classList.add('sticky')
    },
    deactive: function(){
      this.view.classList.remove('sticky')
    }

  }
  controller.init(view)
  // controller.init.call(controller, view)
}.call()
