<template>
<div>
  <h3>Ph.D. Students</h3>
  <hr class="uk-divider-small">     
  <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl" uk-grid>
    <Cardb imageName="profile" title="YEONJAE KOO" content="ricegod@altair.snu.ac.kr"/>
    <Cardb/>
    <Cardb/>
    <Cardb/>
    <Cardb/>
    <Cardb/>
  </div>
</div>
</template>

<script>
import Cardb from './Card-bottom';

export default {
  components: {
    Cardb,
  },
};
</script>
