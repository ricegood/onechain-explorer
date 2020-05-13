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
	<hr class="uk-divider-small">
	<Professor />
      </div>
    </li>
    <li>
      <div>
        <Students title="Ph.D. Students" category="phd"/>
        <Students title="M.S. Students" category="ms"/>
      </div>
    </li>
    <li>
      <div>
        <h3>Alumni</h3>
	<hr class="uk-divider-small">
	<Alumni />
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import Students from './Students';
import Professor from './Professor';
import Alumni from './Alumni';

export default {
  components: {
    Students,
    Professor,
    Alumni,
  },
};
</script>
