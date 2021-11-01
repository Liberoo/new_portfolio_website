<template>
  <div class="footer">
    <div class="text-myDark text-center font-spartan  mb-12">
      Copyright {{ year() }} <span class="font-semibold"> Kamil Jamróz</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  methods: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped></style>
