(function(window, document, undefined){
  'use strict';

  var $ = window.jQuery;

  function popup (url) {
    $.colorbox({
      href: url,
      iframe: true,
      scalePhotos: true,
      transition: 'elastic',
      opacity: 0.80,
      innerWidth: 550,
      innerHeight: 400
    });
  }

  function init () {
    $.colorbox.remove();

    $('.titulkydownloadajax').click(function (e) {
      e.preventDefault();

      var $this = $(this);
      var url = $this.attr('href');

      $.get(url, function (data) {
        var html = (new window.DOMParser()).parseFromString(data, 'text/xml'); //jQuery 1.4.2 in the document :(
        var subtitles = $(html).find('#downlink').attr('href');

        if (subtitles) {
          window.location.href = subtitles;
        } else {
          popup(url);
        }
      });
    });
  }

  if ($.colorbox) {
    init();
  }

})(this, this.document);
