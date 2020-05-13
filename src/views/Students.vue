<!--
  'title' : title
  'category' : 'phd', 'ms'
-->

<template>
<div>
  <h3>{{title}}</h3>
  <hr class="uk-divider-small">
  <div class="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-padding" uk-grid>
    <Cardb v-for="(block, idx) in blocks" v-bind:key="idx" :imageName="blocks[idx].data[1][0]" :title="blocks[idx].data[2]" :content="contents[idx]"/>
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
      blocks: [],
      contents: []
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
	// Fill the contents
	for (var i = 0; i < this.blocks.length; i++) {
          var contentList = this.blocks[i].data[3];
          var content = "";
          for (var j = 0; j < contentList.length; j++) {
            content += (contentList[j] + "\n");
          }
          this.contents.push(content);
	}
      }) 
      .catch((error) => { 
        alert(error); 
      });
    }
  }
};
</script>
