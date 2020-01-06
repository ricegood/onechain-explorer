<template>
<div>
  <CardR />
  <CardL />
  <CardR />
</div>
</template>

<script>
import CardR from '../components/Card-right';
import CardL from '../components/Card-left';

export default {
  components: {
    CardR,
    CardL,
  },
};
</script>
