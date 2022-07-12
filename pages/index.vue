<template>
  <div
    class="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-50 to-gray-100  text-gray-900 font-light dark:from-gray-800 dark:to-gray-900 dark:text-white"
  >
  <div class="flex flex-row space-x-2">
      <h1
    class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
  >
    Nuxt3 
  </h1>
      <h1
    class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-green-600"
  >
    +
  </h1>
      <h1
    class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500"
  >
  TailwindCSS
  </h1>
      <h1
    class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500"
  >
  +
  </h1>
      <h1
    class="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400"
  >
  Pinia   
  </h1>

  </div>
  <p class="mt-4 font-thin">
    with
  </p>
    <button  v-if="store.theme === 'dark'" @click="toggleTheme('light')"
      class="bg-green-500 text-white shadow-lg shadow-cyan-500/110 rounded mt-4 px-6 py-3 flex flex-row items-center space-x-2 transition-all duration-300  hover:bg-green-600 hover:shadow-none"
    >
      <p>Toggle Light</p>
        <SunIcon class="h-4 w-4"></SunIcon>
    </button>
    <button v-else @click="toggleTheme('dark')"
      class="bg-green-500 text-white shadow-lg shadow-cyan-500/110 rounded mt-4 px-6 py-3 flex flex-row items-center space-x-2 transition-all duration-300  hover:bg-green-600 hover:shadow-none"
    >
      <p>Toggle Dark</p>
        <MoonIcon class="h-5 w-5"></MoonIcon>
    </button>
  </div>
</template>

<script>
import { useStore } from "~/store/index";
import { MoonIcon, SunIcon } from "@heroicons/vue/outline";

export default {
  components: {
    MoonIcon,
    SunIcon,
  },
  layout: "default",
  data() {
    return {
      store: useStore(),
    };
  },
  methods: {
    toggleTheme(theme) {
      this.store.theme = theme;
    },
  },
};
</script>

<style></style>
