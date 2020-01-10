<template>
<div class="uk-padding-contents">
  <!-- Iterate recent 15 years -->
  <!--
  <div v-for="i in 15">
    <h1>{{currentYear+1-i}}</h1>
    <List category="publication" :year="currentYear+1-i" type="C"/>
    <List category="publication" :year="currentYear+1-i" type="J"/>
  </div>
  -->
  <Publication />
</div>
</template>

<script>
import List from '../components/List';
import Table from '../components/Table';
import Publication from '../components/Publication';

export default {
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    List,
    Table,
    Publication,
  },
};
</script>
