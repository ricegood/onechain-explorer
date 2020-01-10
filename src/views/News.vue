<template>
<div>
  <Nav />
  <!-- Iterate recent 5 years -->
  <div v-for="i in 5">
    <h1>{{currentYear+1-i}}</h1>
    <List category="news" :year="currentYear+1-i" type="A"/>
  </div>
</div>
</template>

<script>
import Nav from '../components/Nav';
import List from '../components/List';

export default {
  data: function () {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    Nav,
    List,
  },
};
</script>
