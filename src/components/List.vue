<!--
    [Description]
    This componets is for Publication, News categories which have 3 items in data field
    * components props : [`category`, `year`, `type`]
    * block data field : [`title/topic`, `who`, `where/when`]

    [TODO]
    * Refactoring v-for component. Style.
-->

<template>
<div>
<h3 class="uk-light" v-if="type === 'C'">International Conference</h3>
<h3 class="uk-light" v-if="type === 'J'">International Journal</h3>
<div v-for="(block, index) in blocks" :key="index">
<dl class="uk-light uk-description-list uk-description-list-divider" v-for="(value, index) in block.data" :key="index">
    <dt v-if="index === 0">{{value}}</dt>
    <dd v-else>{{value}}</dd>
</dl>
</div>
</div>
</template>
<script>                 
export default {         
  props: ['category', 'year', 'type'],
  data: function () {     
    return {            
      blocks: []
    }                            
  },
  created: function () {   
    this.getLatestBlocksOnce(12);
  },
  methods: {
    getLatestBlocksOnce: function (n) {                                 
      n = n | 0;                         
      const baseURI = 'http://lynx.snu.ac.kr:8082';
      const getURI = baseURI + '/category/' + this.category + '-' + this.year + '-' + this.type;
      this.$http.get(`${getURI}`)                   
      .then((result) => {
        this.blocks = result.data.slice((-1 * n)).reverse();
      })
      .catch((error) => {
        alert(error);
      });
    }
  }
}
</script>
