<template>
<!--
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{name: 'home',}"
          tag='v-btn'
        >
          <v-btn text>
            <span>onechain</span>
            <span class="font-weight-light"> explorer</span>
          </v-btn>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <router-link :to="{name: 'send',}"
        tag='v-btn'
      >
        <v-btn text>SEND</v-btn>
      </router-link>
      
      <v-btn
        text
        href="https://github.com/twodude/onechain/releases/latest"
        target="_blank"
        color=blue
      >
        <span class="mr-0">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
<div style="min-height:100%; width:100%; background-color:black;">
-->
<div :style="{'background-image': 'url(' + require('./images/bg.jpg') + ')'}" style="min-height:100%; width:100%; background-size: cover; background-repeat: no-repeat; background-position:center center;">
  <div style="min-height:100%; width:100%; background-color:rgba(0, 0, 0, 0.6);">
    <div uk-grid style="margin: 0 0 0 0;">
      <div class="uk-width-1-6@m" style="padding: 0 0 0 0;"></div>
      <div class="uk-width-2-3@m" style="padding: 0 0 0 0; height:100%;">
        <Nav />
	<router-view/>
      </div>
      <div class="uk-width-1-6@m" style="padding: 0 0 0 0;"></div>
    </div>
  </div>
</div>
</template>

<script>
import Nav from './components/Nav';
import Home from './components/Home';

export default {
  components: {
    Nav,
    Home,
  },
};
</script>
