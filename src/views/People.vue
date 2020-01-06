<template>
<div>
<!-- <div class="uk-section uk-section-default uk-light" style="background-color:rgb(0,0,0,0);"> -->
<div class="uk-child-width-1-3@m" uk-grid>
  <Cardb/>
  <Cardb/>
  <Cardb/>
</div>
<div class="uk-child-width-1-3@m" uk-grid>
  <Cardb/>
  <Cardb/>
  <Cardb/>
</div>
</div>
</template>

<script>
import Person from '../components/Person';
import Cardb from '../components/Card-bottom';

export default {
  components: {
    Person,
    Cardb,
  },
};
</script>
