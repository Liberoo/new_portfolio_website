<template>
  <div
    class="
      Menu
      top-0
      left-0
      z-30
      w-full
      flex
      justify-between
      bg-myGreen
      text-myDark
      items-center
      flex-row
      py-4
      pl-12
      pr-6
      fixed
    "
  >
    <div class="logo z-30">
      <img src="../assets/images/kj.svg" alt="" class="w-10" />
    </div>
    <div @click="openMenu" class="lg:hidden menu__burger z-20">
      <div :class="[menu ? 'upBurger' : ' ']"></div>
      <div :class="[menu ? 'hidden' : '  ']"></div>
      <div :class="[menu ? 'downBurger' : '  ']"></div>
    </div>

    <ul
      class="
        list__menu
        absolute
        w-full
        flex flex-col
        items-center
        justify-evenly
        h-screen
font-medium
        top-0
        right-0
        transform
        transition-transform
        duration-1000
        lg:static
        lg:options
        lg:flex-row
        lg:h-auto
        lg:w-1/2
        lg:translate-x-0
        bg-myDark
        lg:bg-myGreen
        text-white
      "
      :class="[menu ? 'translate-x-0' : 'translate-x-full']"
    >
      <li class="hover:font-medium" v-for="item in items" :key="item.id">
        <a :href="item.link" @click="menu = !menu"> {{ item.text }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navi',
  data() {
    return {
      menu: false,
      items: [
        {
          id: 0,
          link: '#about',
          text: 'O mnie',
        },
        {
          id: 1,
          link: '#skills',
          text: 'Umiejętności',
        },
        {
          id: 2,
          link: '#portfolio',
          text: 'Portfolio',
        },
        {
          id: 3,
          link: '#contact',
          text: 'Kontakt',
        },
      ],
    };
  },
  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu__burger {
  cursor: pointer;
  height: 50px;
  padding: 5px;
}
.menu__burger div {
  width: 40px;
  height: 5px;
  background-color: white;
  margin: 8px;
  border-radius: 25px;
  transition: 0.5s;
}
.upBurger {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.downBurger {
  transform: rotate(45deg) translate(-3px, -4px);
}
// .list__menu {
//   transform: translateX(100%);
// }
</style>
