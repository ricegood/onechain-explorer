<template>
<div style="height:100%">
  <Nav />
  <div id="particles" style="height:calc(100% - 80px);">
    <div class="intro">
      <Home />
    </div>
  </div>
</div>
</template>

<script>
import Home from '../components/Home';
import Nav from '../components/Nav';

export default {
  components: {
    Home,
    Nav,
  },
};
</script>
