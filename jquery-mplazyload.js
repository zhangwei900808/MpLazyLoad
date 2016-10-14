;(function($,window,document,underfined){
  var MpLazyLoad = function(element,option){
    this.$element = element;
    this.default = {
      'test':'helloworld'
    };
    this.options = $.extend({},this.default,option);
  }
  MpLazyLoad.prototype = {
    init:function(){

    }
  }

  $.fn.mpLazyLoad = function(options){
     var mplazyload = new MpLazyLoad(this,options);
     return mplazyload.init();
  }
})(jQuery,window,document)
