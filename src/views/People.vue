<template>
<div>
<Nav />
<div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
  <Cardb/>
  <Cardb/>
  <Cardb/>
  <Cardb/>
  <Cardb/>
  <Cardb/>
</div>
</div>
</template>

<script>
import Nav from '../components/Nav';
import Person from '../components/Person';
import Cardb from '../components/Card-bottom';

export default {
  components: {
    Nav,
    Person,
    Cardb,
  },
};
</script>
