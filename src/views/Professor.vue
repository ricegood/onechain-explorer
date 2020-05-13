<template>
<div>
  <Cardr v-if="image" :imageName="image" :title="title" :content="contents"/>
</div>
</template>

<script>
import Cardr from '../components/Card-right';

export default {
  props: [],
  components: {
    Cardr,
  },
  data: function () {
    return {
      image: "",
      title: "",
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
      const getURI = baseURI + '/category/professor';
      this.$http.get(`${getURI}`)                    
      .then((result) => { 
        blocks = result.data.reverse(); 
        if (blocks.length > 0) {
          var recentBlock = blocks[0];
          this.image = recentBlock.data[1][0];
          this.title = recentBlock.data[2];
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
