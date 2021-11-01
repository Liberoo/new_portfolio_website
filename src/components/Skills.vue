<template>
  <section>
    <div id="skills"></div>
    <div class="flex items-center flex-col lg:flex-row justify-center w-full bg-white py-12 ">
      <div
        class="headline
          flex justify-center items-center w-1/6 xl:flex-1
            text-myGreen  "
      >
        <span class="transform lg:-rotate-90 text-3xl"> umiejętności</span>
      </div>
      <div
        class=" container xl:pr-24 xl:p-12 xl:border-b-4 xl:border-r-4 border-myDark
        flex-auto max-w-screen-lg flex-col lg:flex-row flex justify-center
         "
      >
        <div class="skills w-full lg:w-1/2 flex justify-center items-center">
          <ul
            class="text-base text-myDark font-bold  flex justify-center lg:justify-start
            items-center text-center lg:text-left
             mt-12 r flex-row flex-wrap  my-5"
          >
            <li class="skillsHeadline ">programowanie</li>
            <li>
              <a
                class="lg:cursor-pointer"
                v-for="(item, i) in skillText"
                :key="item.id"
                :class="{
                  'lg:text-myPurple': i === activeItem && b === 1,
                }"
                @click="
                  selectItem(i);
                  changeText(item.id);
                  b = 1;
                "
              >
                {{ item.title }}
              </a>
            </li>
            <li class="skillsHeadline ">wordpress</li>
            <li>
              <a
                class="lg:cursor-pointer"
                v-for="(item, i) in skillWordpress"
                :key="item.id"
                :class="{
                  'lg:text-myPurple': i === activeItem && b === 2,
                }"
                @click="
                  selectItem(i);
                  changeText(item.id);
                  b = 2;
                "
              >
                {{ item.title }}
              </a>
            </li>
            <li class="skillsHeadline ">design</li>
            <li>
              <a
                class="lg:cursor-pointer"
                v-for="(item, i) in skillDesign"
                :key="item.id"
                :class="{
                  'lg:text-myPurple': i === activeItem && b === 3,
                }"
                @click="
                  selectItem(i);
                  changeText(item.id);
                  b = 3;
                "
              >
                {{ item.title }}
              </a>
            </li>
            <li class="skillsHeadline ">pozostałe</li>
            <li>
              <a
                class="lg:cursor-pointer"
                v-for="(item, i) in skillElse"
                :key="item.id"
                :class="{
                  'lg:text-myPurple ': i === activeItem && b === 4,
                }"
                @click="
                  selectItem(i);
                  changeText(item.id);
                  b = 4;
                "
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
        <div
          class="vsc   px-6 lg:px-0 w-full  flex justify-center
          items-center text-myDark relative  "
        >
          <img src="../assets/images/vsc.svg" alt="" class="hidden lg:block  w-full p-6" />
          <div
            class="
            vscText
            text-sm
            sm:text-base
            xl:text-xl
            text-white
            font-consoleFont
            absolute
            px-4
          "
          >
            <div class="px-6 my-2 text-base ">{{ textValue }}</div>
          </div>
        </div>
      </div>
      <div class=" xl:flex-1 bg-myDark"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  components: {},
  data() {
    return {
      textValue: '',

      activeItem: 0,

      skillText: [
        {
          id: 0,

          title: ' HTML | ',
          text:
            'Tworzenie szkieletu strony internetowej przy wykorzystaniu najnowszej wersji języka HTML.',
        },
        {
          id: 1,

          title: 'CSS | ',
          text:
            'Tworzenie stylów dla aplikacji według zasady Mobile First. Znam także zasady tworzenia responsywnych wersji. Bardzo często korzystam z możliwości Flexboxa. Potrafię również zastosować na stronie Grid.',
        },
        {
          id: 2,

          title: 'SCSS | ',
          text:
            'Potrafię pracować preprocesora SCSS który przyśpiesza, usprawnia pracę a sam kod staje się bardziej czytelny.',
        },
        {
          id: 3,

          title: 'TAILWIND | BOOTSTRAP ',
          text: 'Potrafię wzdrożyć i zastosować framework CSS taki jak Tailwind lub Bootstrap ',
        },

        {
          id: 4,

          title: 'JAVASCRIPT | ',
          text:
            'Potrafię utworzyć proste aplikacje wykorzystując Vanilla JavaScript ze standardem ECMAScript 6. Nie są mi obce: zmienne, operatory, działania na tablicach, instrukcje warunkowe, pętle, funkcje, modyfikacja DOM, liczby losowe, daty. Potrafię pracować z API oraz wiem na czym polega Asynchroniczność.',
        },
        {
          id: 5,

          title: 'VUE.JS | ',
          text:
            'Umiem wdrożyć w swoje projekty framework Vue.js. Potrafię także stworzyć aplikację za pomocą VUE CLI czego przykładem jest obecna strona.',
        },
      ],
      skillWordpress: [
        {
          id: 6,

          title: ' ELEMENTOR | ',
          text:
            'Potrafię tworzyć strony Wordpress za pomocą systemu Drag & Drop przy użyciu Elementora',
        },
        {
          id: 7,

          title: ' WOOCOMMERCE | ',
          text:
            'Potrafię stworzyć w pełni działający sklep internetowy w oparciu o wstyczkę E-Commerce. W moim portoflio posiadam projekty komercyjne w których użyłem tą wtyczkę',
        },
        {
          id: 8,

          title: 'ACF | ',
          text: 'Potrafię zastosować wtyczkę Advance Custom Fields',
        },
        {
          id: 9,

          title: 'PODSTAWY TWORZENIA SZABLONÓW | ',
          text:
            'Znam podstawy tworzenia własnego szablonu Wordpress. Wiedza jest bardzo podstawowa. Aktualnie jestem w trakcie jej poszerzania  z tego zakresu ',
        },
      ],
      skillDesign: [
        {
          id: 10,
          title: ' PHOTOSHOP | ',
          text:
            'Potrafię pracować z Photoshopem tworząc różnego rodzaju grafiki. Na swoim koncie mam kilka projektów komercyjnych w których wykorzystywałem Photoshop.',
        },
        {
          id: 11,
          title: ' ADOBE XD | ',
          text: 'Design stron zawsze projektuję w Adobe XD. ',
        },
      ],
      skillElse: [
        {
          id: 12,

          title: ' GIT | ',
          text:
            'Umiem pracować z system kontroli wersji. Znam podstawowe komendy pozwalające na pracę przy aplikacji w zespole.',
        },
        {
          id: 13,

          title: ' PODSTAWY NPM | ',
          text:
            'Potrafię korzystać ze środowiska NPM w sposób podstawowy. Instalacja różnego rodzaju dodatków, lub przygotowanie środowiska do pracy (np. VUE CLI, GULP)',
        },
        {
          id: 14,

          title: 'GULP | ',
          text:
            'Potrafię skonfigurować Tusk Runner Gulp który wykorzystuje w mniejszych projektach. GULP wspomaga mnie przy optymalizacji strony oraz wydajniejszej pracy przy projekcie',
        },
        {
          id: 15,

          title: 'BEM | ',
          text:
            'Znam zasady wykrzystania metodologi BEM którą wykorzystuję głównie przy projektach w których używam SCSS (bez TAILWIND)',
        },
        {
          id: 16,

          title: 'ANGIELSKI B2 | ',
          text: 'Znam język angielski na poziomie B2. Z takim poziomem ukończyłem studia.',
        },
      ],
    };
  },

  methods: {
    changeText(parametr) {
      if (parametr < 6) {
        this.textValue = this.skillText[parametr].text;
      } else if (parametr > 5 && parametr < 10) {
        this.textValue = this.skillWordpress[parametr - this.skillText.length].text;
      } else if (parametr > 9 && parametr < 12) {
        this.textValue = this.skillDesign[
          parametr - this.skillText.length - this.skillWordpress.length
        ].text;
      } else if (parametr > 11) {
        this.textValue = this.skillElse[
          parametr - this.skillText.length - this.skillWordpress.length - this.skillDesign.length
        ].text;
      }
    },
    selectItem(i) {
      this.activeItem = i;
    },
    AnimationStatus() {
      this.textAnimation = !this.textAnimation;

      if (this.textAnimation === true) {
        this.buttonText = 'Włączona';
      } else {
        this.buttonText = 'Wyłączona';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vscText {
  top: 15%;
  left: 15%;
}
</style>
