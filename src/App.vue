<template>
  <div class="font-spartan text-white">
    <Entrace />

    <Navi :class="[shadow ? 'shadow-myshadow' : '']" />
    <About />

    <Skills />

    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import Entrace from '@/components/Entrace.vue';
import About from '@/components/About.vue';

import Skills from '@/components/Skills.vue';
import Navi from '@/components/Navi.vue';
import Contact from '@/components/ContactComponent.vue';
import Portfolio from '@/components/Portfolio.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Entrace,
    About,
    Footer,
    Skills,
    Navi,
    Contact,
    Portfolio,
  },
  data() {
    return {
      show: false,
      scroll: 0,
      shadow: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.waiting();
  },
  updated() {},
  methods: {
    handleScroll() {
      this.scroll = document.documentElement.scrollTop;
      if (this.scroll > 100) {
        this.shadow = true;
      } else {
        this.shadow = false;
      }
    },
    waiting() {
      setTimeout(() => {
        this.show = true;
      }, 1800);
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active {
  animation: fade 3s;
}
.fade-text-enter-active {
  animation: fade-text 3s;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-text {
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
