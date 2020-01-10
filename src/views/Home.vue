<template>
<div style="height:calc(100vh - 80px);">
  <div id="particles">
    <div class="intro">
      <Home />
    </div>
  </div>
</div>
</template>

<script>
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#ECD5D5',
    lineColor: '#ECD5D5'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});

import Home from '../components/Home';

export default {
  components: {
    Home,
  },
};
</script>
