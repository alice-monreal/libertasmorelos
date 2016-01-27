(function ($) {
  Drupal.behaviors.ws_fs = {
    scriptadded: false,

    attach: function (context, settings) {
      if (!this.scriptadded) {
        var fdiv_root, js, div_root ;
        var fjs = document.getElementsByTagName('script')[0];

        if (!document.getElementById('fb-root')) {
          div_root = document.createElement('div');
          div_root.id = 'fb-root';
          document.body.appendChild(div_root);
        }

        if (!document.getElementById('facebook-jssdk')) {
          js = document.createElement('script'); 
          js.id = 'facebook-jssdk';
          js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=1675595095991000";
          fjs.parentNode.insertBefore(js, fjs);
          this.scriptadded = true;
        }
      }

      $('a.service-links-facebook-share', context).once(function(){
        var f_text = document.createElement('fb:share-button');
        var css = Drupal.settings.ws_fs.css.split(';');
        var key_value = new Array();

        f_text.setAttribute('type', Drupal.settings.ws_fs.type);
        f_text.setAttribute('href', $(this).attr('rel'));
        f_text.setAttribute('locale', "es_ES");
        console.debug('f_text: ', f_text);
        for (i = 0; i < css.length; i++){
          key_value = css[i].split(':');
          $(f_text).css(key_value[0], key_value[1]);
        }

        $(this).replaceWith(f_text);
      });
    }
  }
})(jQuery);
