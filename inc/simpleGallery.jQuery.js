(function($) {
    $.fn.simpleGallery = function() {
          $('.thumbnail').addClass('showThumb').addClass('fancybox').attr('rel', 'group');
          function showImage() {
                 $('a.fancybox[rel="group"]').fancybox({
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
