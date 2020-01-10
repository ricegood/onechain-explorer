<template>
<div style="height:calc(100vh - 90px);">
  <div id="particles">
    <div class="intro">
      <Home />
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

import Home from '../components/Home';
import ThemeSwitch from '../components/ThemeSwitch';

export default {
  components: {
    Home,
    ThemeSwitch,
  },
};
</script>
