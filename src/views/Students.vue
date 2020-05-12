<!--
  'title' : title
  'category' : 'phd', 'ms'
-->

<template>
<div>
  <h3>{{title}}</h3>
  <hr class="uk-divider-small">     
  <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-padding" uk-grid>
    <Cardb v-for="(block, index) in blocks" :imageName="block.data[0]" :title="block.data[1]" :content="block.data[2]"/>
  </div>
</div>
</template>

<script>
import Cardb from '../components/Card-bottom';

export default {
  props: ['title', 'category'],
  components: {
    Cardb,
  },
  data: function () {
    return {
      blocks: []
    }
  },
  created: function () {
    this.getCategoryBlocks();
  },
  methods: {
    getCategoryBlocks: function () {
      const baseURI = 'http://lynx.snu.ac.kr:8082'; 
      const getURI = baseURI + '/category/students-' + this.category; 
      this.$http.get(`${getURI}`)                    
      .then((result) => { 
        this.blocks = result.data.reverse(); 
      }) 
      .catch((error) => { 
        alert(error); 
      });
    }
  }
};
</script>
