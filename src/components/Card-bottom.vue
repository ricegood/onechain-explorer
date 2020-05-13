<template>
<div>
  <div class="uk-card uk-card-default">
    <div v-if="imageName" class="uk-card-media-top">
      <img :src="require(`../images/${imageName}`)" style="width:100%;" />
    </div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{{title}}</h3>
      <vue-markdown :source="content"></vue-markdown>
    </div>
  </div>
</div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: { VueMarkdown },
  props: ['imageName', 'title', 'content']
}
</script>
