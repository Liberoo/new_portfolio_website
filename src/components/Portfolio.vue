<template>
  <div id="portfolio"></div>
  <div class="bg-myDark">
    <h2 class="sectionTitle text-myGreen pt-12 text-3xl w-full text-center">portfolio</h2>
    <div class="px-8 py-8 font-spartan   text-white flex justify-center items-center">
      <div class="results">
        <PortfolioElement
          v-for="item in results"
          :key="item.id"
          :title="item.title"
          :tech="item.technology"
          :git="item.github"
          :live="item.live"
          :item="item"
          :img="item.img"
          :isActive="item.active"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioElement from '@/components/PortfolioElement.vue';

const project1 = require('../assets/images/project1.webp');
const portfolio = require('../assets/images/portfolio.webp');
const portfolioOld = require('../assets/images/portfolioOld.webp');
const quiz = require('../assets/images/quizGame.webp');
const tulimuli = require('../assets/images/tulimuli.webp');

export default {
  name: 'Portfolio',
  data() {
    return {
      results: [
        {
          id: 1,
          img: portfolio,
          title: ' Kamil Jamróz Portfolio',
          technology: 'HTML, CSS, Vue.js, Tailwind',
          github: 'https://github.com/Liberoo/new_portfolio_website',
          live: 'https://www.portfolio.kamiljamroz.pl',
          active: false,
        },
        {
          id: 2,
          img: quiz,
          title: ' Quiz Game',
          technology: 'HTML, CSS, JavaScript',
          github: 'https://github.com/Liberoo/quizgame',
          live: 'https://www.portfolio.kamiljamroz.pl/game',
          active: false,
        },
        {
          id: 3,
          img: portfolioOld,
          title: ' Portfolio - Poprzednia Wersja',
          technology: 'HTML, SCSS, Gulp, JavaScript',
          github: 'https://github.com/Liberoo/portfolio_old_version',
          live: 'https://www.portfolio.kamiljamroz.pl/old',
          active: false,
        },
        {
          id: 4,
          img: project1,
          title: 'Zrobię twoją stronę',
          technology: 'HTML, CSS, Wordpress(Elementor)',
          github: 'https://www.github.com/liberoo',
          live: 'https://www.kamiljamroz.pl',
          active: true,
        },
        {
          id: 5,
          img: tulimuli,
          title: 'Tulimuli',
          technology: 'HTML, CSS, Wordpress(Elementor) + Woocommerce',
          github: 'https://www.github.com/liberoo',
          live: 'https://www.tulimuli.pl',
          active: true,
        },
      ],
    };
  },
  components: {
    PortfolioElement,
  },
};
</script>
<style lang="scss" scoped>
.results {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1500px) {
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
