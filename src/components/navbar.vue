<template>
  <v-list>
    <v-list-item v-for="([icon, text], i) in items" :key="i" link>
      <router-link to="/" style="display: inherit;">
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </router-link>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-logout</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    open: false,
    isAdmin: false,
    items: [["mdi-account-circle-outline", "Home"]],
  }),
  methods: {},
  created() {
    if (localStorage.admin) {
      this.isAdmin = true;
    }
  },
  logout(){
     document.cookie = 'session' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-application ul,
.v-application ol {
  padding-left: 0 !important;
}
</style>
