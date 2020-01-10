<template>
<div>
<label class="uk-switch" for="themeSwitch">
  <input type="checkbox" id="themeSwitch" @change="setTheme()">
  <div class="uk-switch-slider"></div>
</label>
</div>
</template>

<script>
export default {
  methods: {
    setTheme: function () {
      if ($("#html").hasClass("uk-light")) {
        $("#html").removeClass("uk-light");
        $("#html").addClass("uk-dark");
      } else {
        $("#html").removeClass("uk-dark");
        $("#html").addClass("uk-light");
      }
    }
  },
};
</script>
