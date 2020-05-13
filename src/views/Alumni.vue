<template>
<div>
  <vue-markdown :source="contents"></vue-markdown>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  props: [],
  components: {
    VueMarkdown
  },
  data: function () {
    return {
      contents: ""
    }
  },
  created: function () {
    this.getRecentBlock();
  },
  methods: {
    getRecentBlock: function () {
      var blocks = [];
      const baseURI = 'http://lynx.snu.ac.kr:8082'; 
      const getURI = baseURI + '/category/alumni';
      this.$http.get(`${getURI}`)                    
      .then((result) => { 
        blocks = result.data.reverse(); 
	if (blocks.length > 0) {
          var recentBlock = blocks[0];
          var contentList = recentBlock.data[3];
          for (var i = 0; i < contentList.length; i++) {
            this.contents += contentList[i] + "\n";
          }
	}
      }) 
      .catch((error) => { 
        alert(error); 
      });
    }
  }
};
</script>
