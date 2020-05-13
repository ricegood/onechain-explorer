<template>
<!-- TODO: Card Components -->
<div class="uk-padding-contents">
<ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade; swiping: false;">
    <li><a href="#">Research</a></li>
    <li><a href="#">Demo</a></li>
    <li><a href="#">Technical Report</a></li>
</ul>

<ul class="uk-switcher uk-margin">
    <li>
      <Page v-for="(block, idx) in researchBlocks" v-bind:key="idx" :images="researchBlocks[idx].data[1]" :title="researchBlocks[idx].data[2]" :content="researchContents[idx]" />
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
import Page from '../components/Page';
import Slider from '../components/Slider';
import Table from '../components/Table';

export default {
  components: {
    Page,
    Slider,
    Table,
  },
  data: function() {
    return {
      researchBlocks: [],
      researchContents: [],
      demoBlocks: [],
      demoContents: [],
      TRBlocks: [],
      TRContents: []
    }
  },
  created: function() {
    this.getCategoryBlocks('research', this.researchBlocks, this.researchContents);
    this.getCategoryBlocks('demo', this.demoBlocks, this.demoContents);
    this.getCategoryBlocks('technical_report', this.TRBlocks, this.TRContents);
  },
  methods: {
    getCategoryBlocks: function (category, blocks, contents) {
      const baseURI = 'http://lynx.snu.ac.kr:8082';
      const getURI = baseURI + '/category/' + category;
      this.$http.get(`${getURI}`)
      .then((result) => {
        var results = result.data;
        // Fill the contents
        for (var i = 0; i < results.length; i++) {
          blocks.push(results[i]);
          var contentList = results[i].data[3];
          var content = "";
          for (var j = 0; j < contentList.length; j++) {
            content += (contentList[j] + "\n");
          }
          contents.push(content);
        }
      }) 
      .catch((error) => { 
        alert(error); 
      });
    }
  }
};
</script>
