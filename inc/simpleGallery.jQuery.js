(function($) {
    $.fn.simpleGallery = function(options) {
          var thumb = options.thumbElement;

          $(thumb).addClass('showThumb').addClass('fancybox').attr('rel', 'group');
          function showImage() {
                 $(thumb).fancybox({
                      'transitionIn' : 'elastic',
                      'transitionOut' : 'elastic',
                      'titlePosition' : 'over',
                      'speedIn' : 500,
                      'overlayColor' : '#000',
                      'padding' : 0,
                      'overlayOpacity' : .75
                  });
          };

          showImage();
          return this;
    };

})(jQuery);
