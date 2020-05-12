<template>
<div data-app style="min-height:100vh">
  <Nav class="uk-padding-nav"/>
  <transition name="fade">
    <router-view/>
  </transition>
</div>
</template>

<script>
import Nav from './components/Nav';

export default {
  components: {
    Nav,
  },
};
</script>
