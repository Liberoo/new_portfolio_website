<template>
  <section>
    <div class="flex justify-center items-center h-screen bg-myGreen">
      <div class="flex flex-col justify-center items-center w-2/5 max-w-xs">
        <transition name="fade">
          <img
            src="../assets/images/kj.svg"
            v-if="show"
            alt="Kamil Jamróz Website logo"
            class="w-full"
            appear
          />
        </transition>
        <transition name="fade-text">
          <div v-if="show" class="flex flex-col justify-items-end items-end w-56" appear>
            <h1 class="mt-5 text-3xl font-light">Kamil <span class="font-medium">Jamróz</span></h1>
            <span class="text-myDark font-medium">Portfolio</span>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Entrace',
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>
<style lang="scss" scoped></style>
