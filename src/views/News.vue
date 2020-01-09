<template>
<div>
  <!-- Iterate recent 5 years -->
  <div v-bind:v-for="i in 5">
    <h1 class="uk-light">{{currentYear+1-i}}</h1>
    <List category="news" :year="currentYear+1-i" type="A"/>
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
