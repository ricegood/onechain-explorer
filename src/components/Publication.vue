<template>
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
</template>

<script>
import Table from './Table';

export default {
  components: {
    Table,
  },
};
</script>
