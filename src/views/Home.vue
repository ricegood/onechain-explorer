<template>
<div style="height:calc(100vh - 90px);">
  <div id="particles">
    <div class="intro">
      <div>
        <hr class="uk-divider-small">
          <p style="font-family:'Roboto Mono',monospace; font-size:xx-large; font-weight:300;">
	  Virtual Machine &<br/>
	  Optimization Laboratory
          </p>
          <p style="font-family:'Roboto Mono',monospace; font-size:large; font-weight:100;">
	  Electrical & Computer Engineering, Seoul National University
	  </p>
      </div>
      <ThemeSwitch />
    </div>
  </div>
</div>
</template>

<script>
$(document).ready(function() {
  if ($("#html").hasClass("uk-light")) {
    $('#particles').particleground({
      dotColor: '#726D6D',
      lineColor: '#726D6D'
    });
  }
  else {
    $('#particles').particleground({
      dotColor: '#ECD5D5',
      lineColor: '#ECD5D5'
    });
  }
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});

import ThemeSwitch from '../components/ThemeSwitch';

export default {
  components: {
    ThemeSwitch,
  },
};
</script>
