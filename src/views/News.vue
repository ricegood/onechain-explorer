<template>
<div class="uk-padding-contents">
  <!-- Iterate recent 5 years -->
  <!--
  <div v-for="i in 5">
    <h1>{{currentYear+1-i}}</h1>
    <List category="news" :year="currentYear+1-i" type="A"/>
  </div>
  -->
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
import List from '../components/List';
import Cardb from '../components/Card-bottom';

export default {
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    List,
    Cardb,
  },
};
</script>
