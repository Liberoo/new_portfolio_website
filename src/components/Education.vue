<template>
  <section class="bg-grey-800">
    <div class="container flex flex-col md:flex-row justify-center items-center relative pt-12 ">
      <div
        class="education md:w-1/2 lg:w-1/3 flex
         justify-center items-center border-2 h-72 xl:h-56  p-2 rounded-2xl m-4"
      >
        <ul class="">
          <li v-for="item in education" :key="item.id" class="my-4">
            <span class="text-myGreen font-semibold">{{ item.headline }} </span>
            {{ item.text }}
          </li>
        </ul>
      </div>
      <div
        class="like flex justify-center items-center
         md:w-1/2 lg:w-1/3 p-2 rounded-2xl h-72 xl:h-56 m-4  border-2"
      >
        <ul class="">
          <li v-for="item in interested" :key="item.id" class="my-4">
            <span class="text-myGreen font-semibold">{{ item.headline }} </span>
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      interested: [
        {
          id: 1,
          headline: 'Sport',
          text: '(Piłka nożna / siłownia)',
        },
        {
          id: 2,
          headline: 'Gry planszowe i zagadki logiczne',
          text: 'i zagadki logiczne',
        },
        {
          id: 3,
          headline: 'Aktywne spędzanie czasu',
          text: 'ze znajomymi',
        },
        {
          id: 4,
          headline: 'Edukacja',
          text: ' z zakresu różnych programów i języków programowania',
        },
      ],
      education: [
        {
          id: 1,
          headline: '2013-2017',
          text: 'Technikum Komunikacyjne nr 25 w Krakowie (Technik Informatyk)',
        },
        {
          id: 2,
          headline: '2018',
          text: 'Szkoła Grafiki Komputerowej',
        },
        {
          id: 3,
          headline: '2018-2021',
          text:
            'Uniwersytet Ekonomiczny w Krakowie (Marketing i Komunikacja rynkowa z rozszerzeniem E-Marketingu)',
        },
      ],
    };
  },
};
</script>
