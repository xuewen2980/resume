!function(){
  //点击导航栏标签,滚动条滚动到指定位置
  let view = $('nav.menu')
  let controller = {
    view: null,
    aTags: null,
    init: function(view){
      this.view = view
      this.bindEvents()
    },
    scrollToElement: function(element){
      let top = element.offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop // 路程
      var a = s>=0?1:-1
      var i = 10*a;
        var scrolldelay = setInterval(function(){
          window.scrollBy(0, i);
          i = i+ 10*a;
          if (a*window.scrollY >= a*targetTop) {
              clearInterval(scrolldelay);
              window.scrollTo(0, targetTop);
          }
        }, 15);
     
    },
    bindEvents: function(){
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for(let i=0; i<aTags.length; i++){
        aTags[i].onclick = (e)=>{
          e.preventDefault()
          let a = e.currentTarget
          let href = a.getAttribute('href') //'#siteAbout'
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    },
  }

  controller.init(view)
}.call()
