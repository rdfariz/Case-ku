<template>
    <div id="app">
      <v-app light>

        <!-- Header -->
        <header :class="{'article-page':$route.path != '/'}">
            <v-container grid-list-xs>
            <div class="left">
                <h1 class="title-header">Case-ku</h1>
                <p class="paragraf-header">Hias smartphone-mu agar kekinian & gaul</p>
                <v-slide-x-transition>
                  <h1 class="subtitle-header" v-show="true">/ {{this.$route.meta.title}}</h1>
                </v-slide-x-transition>
            </div>
            </v-container>
        </header>

        <transition :name="transitionName" mode="out-in">
          <router-view></router-view>
        </transition>

        <footer>
            <v-container grid-list-xs>
            <div class="left">
                <h1 class="title-footer">Info Pemesanan</h1><br>
                <span class="paragraf-footer">WA:<br>-</span>
                <br>
                <span class="paragraf-footer">Instagram:<br>-</span>
            </div>
            </v-container>
        </footer>

      </v-app>
    </div>
</template>

<script>
const DEFAULT_TRANSITION = 'fade';
export default {
    name: 'App',
    data: () => ({
        prevHeight: 0,
        transitionName: DEFAULT_TRANSITION
    }),
    created() {
          function scrollToTop(scrollDuration) {
              var cosParameter = window.scrollY / 2,
                  scrollCount = 0,
                  oldTimestamp = performance.now();
              function step (newTimestamp) {
                  scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
                  if (scrollCount >= Math.PI) window.scrollTo(0, 0);
                  if (window.scrollY === 0) return;
                  window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
                  oldTimestamp = newTimestamp;
                  window.requestAnimationFrame(step);
              }
              window.requestAnimationFrame(step);
          }

      this.$router.beforeEach((to, from, next) => {
        scrollToTop(250)
        setTimeout(() => {
          let transitionName = to.meta.transitionName || from.meta.transitionName;

          if (transitionName === 'slide') {
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.split('/').length;
            transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
          }

          this.transitionName = transitionName || DEFAULT_TRANSITION;
          next();
        }, 300);
      
      });
    },
}
</script>

<style>
/* .ps {
  height: 100vh;
} */

html {
  overflow: auto !important;
  /* scroll-behavior: smooth !important; */
}

#nprogress .bar {
  height: 4px !important;
  /* background: #ffffff !important; */
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background: #fefce5; */
  background: #ffffff;
  color: #252525;
}

header, footer {
    width: 100% !important;
    position: relative !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    overflow: hidden !important;
    /* background: #fefce5 !important; */
    background: #eb1c5a !important;
    /* background: linear-gradient(rgba(0,0,0,0.1), rgba(254, 252, 229, 1)), url('./assets/img/bg.png') !important; */
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0, 0, 0, 0.7)), url('./assets/img/bg.jpg') !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
    background-size: cover !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    color: #ffffff !important;
    -webkit-transition: .3s cubic-bezier(.4,0,.2,1) !important;
    transition: .3s cubic-bezier(.4,0,.2,1) !important;
    transition-delay: .3s !important;
    font-family: 'Quicksand', sans-serif !important;
  /* font-family: 'Sniglet', cursive; */
}

header {
  height: 400px !important;
  margin-bottom: 30px !important;
}

header.article-page {
  height: 260px !important;
}

footer {
  height: 350px !important;
  margin-top: 30px !important;
}
footer.fullHeight {
  height: 100vh !important;
}

.application--wrap {
  position:static !important;
  backface-visibility: hidden !important;
  -webkit-backface-visibility:inherit !important;
  -webkit-transform: translate3d(0,0,0) !important;
  justify-content: space-between !important;
  -webkit-transform: translateZ(0px) !important;
  transform: translateZ(0px) !important;
}

header .left, footer .left {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    /* padding: 85px; */
}

.title-header {
    font-size: 3.5em !important;
}

.subtitle-header {
    font-size: 2em !important;
}

.paragraf-header {
    font-size: 1.5em !important;
}

.card-product.card-article .title-header {
    font-size: 3em !important;
}

.title-footer {
    font-size: 3.5em !important;
}

.paragraf-footer {
    font-size: 1.5em !important;
}

header .right, footer .right {
    display: none !important;
    width: 0%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: left;
    /* padding: 80px; */
}

header .right img, footer .right img {
    width: 100% !important;
}

.paragraf-card {
    font-size: 1.3em !important;
    font-family: 'Quicksand', sans-serif !important;
}

.card-product, .card-product.my-3.mx-3.px-4.py-5 {
  border-radius: 1.30rem !important;
}

.card-product.card-article {
  text-align: left !important;
}

.v-card__actions .v-btn+.v-btn {
  margin-left: 0 !important;
}


@media only screen and (max-width: 1903px) {
    /* lg */

}

@media only screen and (max-width: 1263px) {
    /* md */
    header .left, header .right, footer .left, footer .right {
        padding: 20px !important;
    }
}

@media only screen and (max-width: 959px) {
    /* sm */
    header, footer, header.article-page {
        flex-direction: column !important;
        height: auto !important;
        margin: 0 !important;
    }

    header .left, header .right, footer .left, footer .right {
        width: 100% !important;
        padding: 20px !important;
        height: auto !important;
    }

    .title-header {
        font-size: 3em !important;
    }

    .subtitle-header {
        font-size: 1.5em !important;
    }

    .paragraf-header {
        font-size: 1.3em !important;
    }

    .title-footer {
        font-size: 3em !important;
    }

    .paragraf-footer {
        font-size: 1.3em !important;
    }
}

@media only screen and (max-width: 599px) {
    /* xs */
    
    .card-product, .card-product.my-3.mx-3.px-4.py-5 {
      padding: 4.5px 1.5px !important;
      margin-left: 0px !important;
      margin-right: 0px !important;
      /* margin-top: 5px !important;
      margin-bottom: 5px !important; */
      /* border-radius: 0; */
      box-shadow: none !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
    }

    .card-product.card-article, .card-product.card-article.my-3.mx-3.px-4.py-5 {
      box-shadow: none !important;
      padding: 0 !important;
      margin: 0px !important;
    }

    .v-responsive {
      width: 90% !important;
      margin: auto !important;
      height: auto !important;
    }

    .v-responsive .v-image {
      height: auto !important;
    }

    .v-toolbar__title:not(:first-child) {
      margin-left: 0 !important;
    }

    .title-header {
        font-size: 2em !important;
    }

    .subtitle-header {
        font-size: 1.5em !important;
    }

    .card-product.card-article .title-header {
      font-size: 1.7em !important;
    }

    .paragraf-header {
        font-size: 1.1em !important;
    }

    .title-footer {
        font-size: 2em !important;
    }

    .paragraf-footer {
        font-size: 1.1em !important;
    }

    .paragraf-card {
      font-size: 1.1em !important;
      margin: 0 !important;
    }

    .img-product {
      height: auto !important;
    }
}


/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.25s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translateY(2em);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translateY(-2em);
}
</style>


<style>
.vjs_video_3-dimensions {
    width: 100% !important;
    height: 300px !important;
}

.vjs_video_1777-dimensions {
    width: 100% !important;
    height: 300px !important;
}

.vjs_video_580-dimensions {
    width: 100% !important;
    height: 300px !important;
}

.video-js {
    width: 100% !important;
    height: 300px !important;
}


.vjs-poster {
background-size: cover !important;
  background-color: #252525 !important;
}

.video-js {
  background-color: #ffffff !important;
}
</style>