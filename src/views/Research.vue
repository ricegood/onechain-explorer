<template>
<div class="uk-padding-contents">
<ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade; swiping: false;">
    <li><a href="#">Research</a></li>
    <li><a href="#">Demo</a></li>
    <li><a href="#">Technical Report</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>
      <div>
        <CardR />
        <CardL />
        <CardR />
      </div>
    </li>
    <li>
      <Slider />
    </li>
    <li>
      <Table />
    </li>
</ul>
</div>
</template>

<script>
import CardR from '../components/Card-right';
import CardL from '../components/Card-left';
import Slider from '../components/Slider';
import Table from '../components/Table';

export default {
  components: {
    CardR,
    CardL,
    Slider,
    Table,
  },
};
</script>
