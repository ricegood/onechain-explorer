<template>
<div class="uk-card uk-card-default uk-grid-collapse uk-margin" uk-grid>
    <div class="uk-card-media-left uk-cover-container uk-width-1-1 uk-width-1-4@s">
        <img :src="require(`../images/${imageName}`)" class="uk-width-1-1" />
    </div>
        <div class="uk-card-body uk-width-1-1 uk-width-3-4@s">
            <h3 class="uk-card-title">{{title}}</h3>
            <p>{{content}}</p>
        </div>
</div>
</template>

<script>
export default {
  props: ['imageName', 'title', 'content']
}
</script>
