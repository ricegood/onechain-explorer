<template>
<div>
<div>
    <ul class="uk-tab-bottom uk-flex-center" uk-tab>
        <li><router-link to="/research">Research</router-link></li>
        <li><router-link to="/demo">Demo</router-link></li>
        <li><router-link to="/technicalreport">Technical Report</router-link></li>
    </ul>
</div>
<div>
  <CardR />
  <CardL />
  <CardR />
</div>
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
