<template>
  <div class="uk-padding">
    <h3>{{title}}</h3>
    <hr>
    <img v-for="img in images" :key="img" class="uk-padding uk-width-1-1 uk-width-1-2@s" :src="require(`../images/${img}`)">
    <vue-markdown :source="content"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: { VueMarkdown },
  props: ['images', 'title', 'content']
}
</script>
