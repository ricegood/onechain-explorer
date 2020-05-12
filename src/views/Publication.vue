<template>
<div class="uk-padding-contents">
<ul uk-accordion="multiple: true">
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">2019</a>
        <div class="uk-accordion-content">
            <Table />
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">2018</a>
        <div class="uk-accordion-content">
            <Table />
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">2017</a>
        <div class="uk-accordion-content">
            <Table />
        </div>
    </li>
</ul>
</div>
</template>

<script>
import Table from '../components/Table';

export default {
  data: function() {
    return {
    }
  },
  components: {
    Table,
  },
};
</script>
