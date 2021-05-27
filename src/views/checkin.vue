<template>
  <div style="margin: 0 auto;">
    <div v-if="spinner" class="spin">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
    <div v-if="!spinner">
      <vue-qrcode style="margin: 0 auto;" :width="500" value="https://www.1stg.me" />
      <div v-if="userActive">
        <h1 style="margin: 0 auto; text-align:center; color: green; font-weight: bold;">Membeship Active</h1>
      </div>
      <div v-if="!userActive">
        <h1 style="margin: 0 auto; text-align:center; color: crimson; font-weight: bold;">Membeship Inactive</h1>
        <h1 style="margin: 0 auto; text-align:center; color: crimson; font-weight: bold;">{{ message }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
import axios from "axios";
import Vue from "vue";
export default {
  name: "checkin",
  components: {
    VueQrcode,
  },
  data: () => ({
    spinner: true,
    userActive: false,
    message: "",
    backend: Vue.config.productionTip ? "http://localhost:3000/" : "http://localhost:3000/",
  }),
  created() {
    axios
      .get(`${this.backend}api/user/getCurrUser`, { withCredentials: true })
      .then((response) => {
        // debugger;
        this.spinner = false;
        var data = response.data;
        var user = data.data;
        if (data.success) {
          this.userActive = user.isActive;
        } else {
        }
      })
      .catch((error) => {
        this.spinner = false;
        this.show_err = true;
        this.err_message = JSON.stringify(error) || "Error Signing Up. Please try again later.";
      });
  },
};
</script>
<style>
.spin {
  position: absolute;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
} 
</style>
