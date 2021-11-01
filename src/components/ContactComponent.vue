<template>
  <div id="contact"></div>
  <section class="bg-myGreen relative overflow-hidden   py-36">
    <div class=" elementt bg-myDark"></div>

    <h2 class="sectionTitle w-full text-center text-2xl mt-12 text-myDark">kontakt</h2>
    <div
      class="
        w-full

        flex-col flex
        justify-center
        items-center
        py-12
      "
    >
      <div class="shadow-myshadow py-8 w-9/12 text-center text-white">
        <div class="mt-5" v-for="item in contactData" :key="item.id">
          <span class="font-bold uppercase transition-all block">{{ item.title }} </span>
          <transition name="fade" mode="out-in">
            <span
              class="text"
              :class="[item.active ? '' : 'cursor-pointer']"
              @click="
                item.prev = item.text;
                item.active = true;
              "
              :key="item.prev"
              >{{ item.prev }}</span
            >
          </transition>
        </div>
      </div>

      <div class=" elementtEnd bg-white"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactData: [
        {
          id: 0,
          title: 'Phone',
          text: '667-897-507',
          prev: 'Pokaż',
          active: false,
        },
        {
          id: 1,
          title: 'E-mail',
          text: 'kamil-jamroz@o2.pl',
          prev: 'Pokaż',
          active: false,
        },
      ],
    };
  },
  methods: {
    changeText(parametr) {
      this.contactData[parametr].prev = this.contactData[parametr].text;
    },
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.elementt {
  position: absolute;
  top: -35px;
  left: 0;
  transform: skewY(-2deg);
  height: 150px;
  width: 100%;
}
.elementtEnd {
  position: absolute;
  bottom: -90px;
  left: 0;
  transform: skewY(-2deg);
  height: 150px;
  width: 100%;
}
</style>
