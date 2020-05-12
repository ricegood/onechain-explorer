<template>
<div class="uk-padding-contents">
  <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
    <Cardb />
    <Cardb />
    <Cardb />
    <Cardb />
    <Cardb />
    <Cardb />
  </div>
</div>
</template>

<script>
import Cardb from '../components/Card-bottom';

export default {
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    Cardb,
  },
};
</script>
