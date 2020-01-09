/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#ECD5D5',
    lineColor: '#ECD5D5'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
