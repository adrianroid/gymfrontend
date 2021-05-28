<template>
  <v-list>
    <v-list-item v-for="(item, i) in items" :key="i" link :to="item.path">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- <v-list-item v-for="([icon, text, path], i) in admin_items" :key="text" :to="path" link>
      <v-list-item-icon>
        <v-icon>{{ icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item> -->

    <v-list-item @click="logout()">
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
    items: [
      {
        icon: "mdi-account-circle-outline",
        text: "Home",
        path: "/",
        admin: false,
      },
      {
        icon: "mdi-account-group",
        text: "Members",
        path: "/members",
        admin: true,
      },
    ],
    // admin_items: [["mdi-account-group", "Members", "/members"]],
  }),
  methods: {
    logout() {
      document.cookie = "session" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.$router.push({ path: "/login" });
    },
  },
  created() {
    if (localStorage.admin) {
      this.isAdmin = true;
    }
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
