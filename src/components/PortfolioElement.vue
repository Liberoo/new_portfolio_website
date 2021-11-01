<template>
  <div>
    <div>
      <div class="images shadow-myshadow">
        <a :href="live" target="blank" class="cursor-pointer">
          <img class="image w-full" :src="img" alt="Tworzenie stron interenetowych" />
        </a>
      </div>
      <div class="result my-5 ">
        <ul>
          <li class="item text-myGreen font-bold">{{ title }}</li>
          <li class="item text-white">Technologie: {{ tech }}</li>
          <li class="item text-myPurple font-semibold hover:text-white">
            <a :href="git" target="blank" :class="{ hidden: isActive }">//Github</a>
          </li>
          <li class="item text-myPurple font-semibold hover:text-white">
            <a :href="live" target="blank">//Live</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioElement',
  props: {
    item: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
    },
    tech: {
      type: String,
    },
    git: {
      type: String,
    },
    live: {
      type: String,
    },
    img: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
