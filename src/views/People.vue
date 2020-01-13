<template>
<div class="uk-padding-contents">
  <ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade; swiping: false;">
    <li><a href="#">Professor</a></li>
    <li><a href="#">Students</a></li>
    <li><a href="#">Alumni</a></li>
  </ul>
  <ul class="uk-switcher uk-margin">
    <li>
      <div>
        <h3>Professor</h3>
      </div>
    </li>
    <li>
      <div>
        <People title="Ph.D. Students" category="phd"/>
        <People title="M.S. Students" category="ms"/>
      </div>
    </li>
    <li>
      <div>
        <h3>Alumni</h3>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import People from '../components/People';

export default {
  components: {
    //Person,
    People,
  },
};
</script>
