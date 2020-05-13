<template>
<div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
    <div class="uk-card-media-left uk-cover-container uk-width-1-1 uk-width-1-4@m">
        <img :src="require(`../images/${imageName}`)" class="uk-width-1-1" />
    </div>
        <div class="uk-card-body uk-width-1-1 uk-width-3-4@m">
            <h3 class="uk-card-title">{{title}}</h3>
            <vue-markdown :source="content"></vue-markdown>
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
