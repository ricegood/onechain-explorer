<template>
<div style="height:100vh">
  <Nav />
  <div id="particles" style="height:calc(100% - 80px);">
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
import Nav from '../components/Nav';

export default {
  components: {
    Home,
    Nav,
  },
};
</script>
