<template>
  <v-app>
    <v-app-bar app color="white" fixed clipped-left style="z-index:100">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        color="black"
      ></v-app-bar-nav-icon>
      <img class="mb-2" width="125" src="../assets/logo.png" />
    </v-app-bar>

    <v-navigation-drawer
      mobile-breakpoint="901"
      v-bind:width="250"
      app
      v-model="drawer"
      clipped
      fixed
      style="top:56px"
    >
      <NavBar />
    </v-navigation-drawer>

    <v-main> 
         <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
};
</script>
