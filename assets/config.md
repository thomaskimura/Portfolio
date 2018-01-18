# Styleguide options

### Head

    link(rel="stylesheet" href="../assets/css/style.min.css")
    link(rel='stylesheet' href='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.css')
    script(src='https://cdn.rawgit.com/styledown/styledown/v1.0.2/data/styledown.js')
    <script src="https://use.fontawesome.com/b8a1825d4b.js"></script>

### Body


    <!-- BAR -->
    <header class="navbar">
      <div class="row expanded align-center">
        <div class="small-6 columns">
          <span>
            <a href="/"><img class="logo-topbar" src="/assets/img/logo64_light.png"></a>
          </span>
        </div>
        <div class="small-6 columns text-right">
          <i class="fa fa-bars nav-toggle text-white cursor-pointer" aria-hidden="true"></i>
        </div>
      </div>
    </header>
    <!-- END BAR -->


    <!-- SPACING -->
    <header class="navbar-spacing">
      <div class="row expanded align-center">
        <div class="small-12 columns">
          <span>
            <a href="/"><img class="logo-topbar" src="/assets/img/logo64_light.png"></a>
          </span>

        </div>
      </div>
    </header>
    <!-- END SPACING -->


    <!-- FULL NAV -->
    <nav class="nav-fullpage color-bg-dark" id="nav">
      <!-- SPACING -->
      <div class="navbar-spacing">
        <div class="row expanded align-center">
          <div class="small-6 columns">
            <span>
              <a href="/"><img class="logo-topbar" src="/assets/img/logo64_light.png"></a>
            </span>
          </div>
          <div class="small-6 columns text-right">
            <i class="fa fa-bars nav-toggle text-white cursor-pointer" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <!-- END SPACING -->

      <section class="padding-t1">

        <div class="row padding-b2">

          <div class="large-8 medium-8 small-12 columns padding-t2">
            <a class="button-plain-dark full" href="/services">
              Services
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <hr class="opacity-4">
            <a class="button-plain-dark full" href="/work">
              Selected Work
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div class="large-4 medium-4 small-12 columns padding-t2">
            <p class="margin-none-t">
              <a class="button-invert full text-center" href="/quote"><strong>Request Quote</strong></a>
            </p>

            <p class="text-center-small text-white text-big">
              My name is Thomas Kimura and I'm a Toronto based freelancer. I design and build digital products.
            </p>

            <p class="text-center-small text-white text-big">
              Schedule a free <strong><a class="text-white" href="https://calendly.com/kimuradigital/15min/" target="_blank">consultation</a></strong> OR email me at
              <strong><a class="text-white" href="mailto:hello@kimuradigital.com">hello@kimuradigital.com</a></strong>.
            </p>
          </div>

        </div>


        <div class="row">
          <div class="small-12 columns">
            <hr class="opacity-4">
            <p class="margin-t2 text-center">
              <a href="/"><img class="padding-b05" src="/assets/img/logotype_light.png"></a>
            </p>
            <p class="text-center text-small opacity-2 text-white margin-none">
              <a href="/terms" class="text-white">Terms & Conditions</a> - Copyright © <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script> Kimura Digital. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </nav>
    <!-- END FULL NAV -->


    <!-- HEADER -->
    <section class="padding-tb4">
      <div class="row align-center">

        <div class="large-12 medium-12 small-12 columns">
          <h1 class="margin-none-b">Styleguide</h1>
        </div>

      </div>
    </section>
    <!-- END HEADER -->


    <main role="main">
      <article class="color-bg-cream">
        <section class="padding-tb2">
          <div class="row align-center">
            <div class="large-12 medium-12 small-12 columns">

              <div id="styleguides" sg-content></div>

            </div>
          </div>
        </section>
      </article>
    </main>


    <section class="padding-tb4 border-solid-top border-color-calm">
      <div class="row align-center align-middle">

        <div class="large-12 medium-12 small-12 columns text-center">
          <img src="/assets/img/logotype_dark.png"/>
          <p class="margin-none">
            <a href="mailto:thomas@kimuradigital.com">hello@kimuradigital.com</a>
          </p>
          <p class="text-center text-smaller opacity-3">
            <a href="/terms">Terms & Conditions</a> </br> Copyright © <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script> Kimura Digital. All rights reserved.
          </p>
        </div>

      </div>
    </section>


    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="/assets/js/baffle.min.js"></script>
    <script src="/assets/js/stickybits.min.js"></script>
    <script src="/assets/js/script.js"></script>
    <script type="application/ld+json">
    { "@context" : "http://schema.org",
      "@type" : "Organization",
      "legalName" : "Kimura Digital",
      "url" : "http://kimuradigital.com/",
      "logo" : "http://kimuradigital.com/siteicon.png",
      "sameAs" : [
        "http://www.twitter.com/_tomki"]
    }
    </script>
