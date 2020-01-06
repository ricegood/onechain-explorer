<template>
<div>
  <!-- Iterate recent 15 years -->
  <div v-for="i in 15">
    <h1 class="uk-light">{{currentYear+1-i}}</h1>
    <List category="publication" :year="currentYear+1-i" type="C"/>
    <List category="publication" :year="currentYear+1-i" type="J"/>
  </div>
</div>
</template>

<script>
import List from '../components/List';

export default {
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    List,
  },
};
</script>
