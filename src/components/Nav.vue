<template>
  <div>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-light uk-navbar uk-animation-toggle" tabindex="0">
	      <router-link to="/" style="text-decoration: none;">
	        <a class="uk-navbar-item uk-logo uk-animation-fade" href="#" style="font-family:'Roboto Mono',monospace; font-size:xx-large; font-weight:700;">VMOlab.</a>
	      </router-link>
	    </div>
            <div class="uk-light uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li>
                        <router-link to="/people">People</router-link>
			<!--
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="#">Professor</a></li>
                                <li><a href="#">Ph.D. Students</a></li>
                                <li><a href="#">M.S. Students</a></li>
                                <li><a href="#">Alumni</a></li>
                            </ul>
                        </div>
			-->
                    </li>
                    <li>
                        <router-link to="/research">Research</router-link>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="#">Software</a></li>
                                <li><a href="#">Demo</a></li>
                                <li><a href="#">Technical Report</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><router-link to="/publication">Publication</router-link></li>
                    <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/overview" uk-icon="icon: album"></router-link></li>
                </ul>
            </div>
        </nav>
  </div>
</template>
