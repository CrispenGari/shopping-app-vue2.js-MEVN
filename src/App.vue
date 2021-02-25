<template>
  <v-app>
    <v-main>
      <div class="app">
        <Header />
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { Header } from "./components";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
