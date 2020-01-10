<template>
  <div>
        <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar uk-animation-toggle" tabindex="0">
	      <!--router-link to="/" style="text-decoration: none;"-->
	        <a class="uk-navbar-item uk-logo uk-animation-fade" href="/" style="padding:0 0 0 0;font-family:'Roboto Mono',monospace; font-size:xx-large; font-weight:700;">VMOlab.</a>
	      <!--/router-link-->
	    </div>
            <div class="uk-navbar-right uk-visible@m">
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
			<!--
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><router-link to="/research">Software</router-link></li>
                                <li><router-link to="/research">Demo</router-link></li>
                                <li><router-link to="/research">Technical Report</router-link></li>
                            </ul>
                        </div>
			-->
                    </li>
                    <li><router-link to="/publication">Publication</router-link></li>
                    <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/overview" uk-icon="icon: album"></router-link></li>
                </ul>
            </div>
            <div class="uk-navbar-right uk-hidden@m">
                <a class="uk-navbar-toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-nav-primary"></a>
            </div>
        </nav>
        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; flip: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                    <li><router-link to="/people" class="uk-offcanvas-close">People</router-link></li>
                    <li>
                        <router-link to="/research" class="uk-offcanvas-close">Research</router-link>
			<!--
                        <ul class="uk-nav-sub">
                            <li><router-link to="/research" class="uk-offcanvas-close">Software</router-link></li>
                            <li><router-link to="/research" class="uk-offcanvas-close">Demo</router-link></li>
                            <li><router-link to="/research" class="uk-offcanvas-close">Technical Report</router-link></li>
                        </ul>
			-->
                    </li>
                    <li><router-link to="/publication" class="uk-offcanvas-close">Publication</router-link></li>
                    <li><router-link to="/news" class="uk-offcanvas-close">News</router-link></li>
                    <li><router-link to="/contact" class="uk-offcanvas-close">Contact</router-link></li>
                    <li class="uk-nav-divider"></li>
		    <ul class="uk-nav-sub">
                        <li><router-link to="/overview" class="uk-offcanvas-close"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> See blocks</router-link></li>
		    </ul>
                </ul>

            </div>
        </div>
  </div>
</template>
