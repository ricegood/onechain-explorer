<template>
<div>
  <div v-for="(block, index) in blocks" class="uk-padding">
    <!-- TODO1 : content 에 여러 내용 (전화번호 등) 전달할 수 있어야 함 -->
    <Cardr v-for="(block, index) in blocks" :imageName="block.data[0]" :title="block.data[1]" :content="block.data[2]"/>

    <!-- TODO2 : Fill the contents also using blocks -->
    <h3>Areas of Interests</h3>
    <hr class="uk-divider-small">
    <h3>Research</h3>
    <hr class="uk-divider-small">
    <h3>Current and Previous Industry Projects</h3>
    <hr class="uk-divider-small">
    <h3>Selected Publications</h3>
    <hr class="uk-divider-small">
    <h3>Program Committees</h3>
    <hr class="uk-divider-small">
    <h3>Awards</h3>
    <hr class="uk-divider-small">
    <h3>Biographical Sketch</h3>
    <hr class="uk-divider-small">

  </div>
</div>
</template>

<script>
import Cardr from './Card-right';

export default {
  props: [],
  components: {
    Cardr,
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
      const getURI = baseURI + '/category/professor';
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
