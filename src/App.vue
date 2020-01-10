<template>
<div style="min-height:100vh">
  <Nav class="uk-padding-nav"/>
  <router-view/>
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
