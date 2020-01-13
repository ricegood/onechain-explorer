<template>
<div>
  <div class="uk-card uk-card-default">
    <div v-if="imageName" class="uk-card-media-top">
      <img :src="require(`../images/${imageName}`)" style="width:100%;" />
    </div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{{title}}</h3>
      <p>{{content}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['imageName', 'title', 'content']
}
</script>
