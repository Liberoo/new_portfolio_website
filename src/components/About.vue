<template>
  <div id="about"></div>
  <section>
    <div class="flex items-center flex-col lg:flex-row justify-center w-full bg-white py-12 ">
      <div
        class="headline
          flex justify-center items-center w-full lg:w-1/6 xl:flex-1
            text-myGreen  "
      >
        <span class="transform lg:-rotate-90  text-3xl "> O mnie</span>
      </div>
      <div
        class=" container  flex-auto

         max-w-screen-lg flex-col lg:flex-row flex justify-center
        p-8  "
      >
        <div class="image flex justify-center lg:block    flex-1 p-12">
          <img src="../assets/images/me.webp" alt="" class=" md:w-3/5 lg:w-full" />
        </div>
        <div class="text flex-1 text-myDark xl:w-1/2">
          <h2 class="text-4xl mt-12 ">
            Kamil <span class="font-medium text-myGreen">Jamróz</span>
          </h2>
          <p class="mt-6 xl:mt-12 pr-4">
            Mam na imię Kamil. Od dziecka interesuje się wszystkim co ma związek z komputerami. W
            technikum na profilu Informatycznym zrozumiałem, że programowanie sprawia mi
            przyjemność. W różnego typu projektach, ogromną uwagę zawsze przywiązywałem do
            wizualnego efektu strony. Dlatego zainteresowałem się projektowaniem stron. Bardzo
            interesuje mnie wiedza z zakresu tworzenia witryn, które są ładne, a zarazem
            funkcjonalne. Jestem osobą energiczną, uwielbiającą kontakt z drugim człowiekiem, oraz
            nawiązywanie nowych relacji. Kocham sport i jego nieodłączny element jakim jest
            rywalizacja.
          </p>
          <div class="socials flex mt-6">
            <a
              class="transform hover:scale-125 transition"
              href="https://www.behance.net/jamro_gfx "
              target="_blank"
              ><img class=" w-8  mr-2" src="../assets/images/behance.svg" alt="behance"
            /></a>
            <a
              class="transform hover:scale-125 transition"
              href="https://github.com/Liberoo"
              target="_blank"
              ><img class=" w-8" src="../assets/images/github.svg" alt="github"
            /></a>
          </div>
        </div>
      </div>
      <div class=" xl:flex-1"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>
