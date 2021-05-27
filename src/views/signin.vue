<template>
  <!-- component -->
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div style="width:100%" class=" mb-1">
        <img class="self-center" style="margin: auto;" width="200" src="../assets/logo.png" />
      </div>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7 pb-3">
          <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
          <input v-model="email" type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full border border-gray-300 border-solid" />
          <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
          <input v-model="password" type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full border border-gray-300 border-solid" />
          <button @click="login" type="button" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:shadow-sm text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Login</span>
          </button>
          <div class="text-center whitespace-nowrap mt-2">
            <router-link to="/reset-password">
              <button class="transition duration-200 mx-5 px-5  cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <span class="inline-block ml-1">Forgot Password</span>
              </button>
            </router-link>
          </div>
        </div>
        <div class="py-2">
          <div class="center">
            <div class="text-center  whitespace-nowrap">
              <button class="transition duration-200 mx-5 px-5 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg> -->
                <router-link to="/sign-up">
                  <span class="inline-block ml-1">Sign Up</span>
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <v-alert v-if="show_err" type="error" class="m-3" style="background: rgb(220, 38, 38)!important;">
        {{ err_message }}
      </v-alert>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn style="color: crimson;" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "SignIn",
  // computed: {
  //   passwordMatch() {
  //     return () => this.password === this.verify || "Password must match";
  //   },
  // },

  data: () => ({
    show_err: false,
    err_message: "Error Code 101.",
    email: null,
    password: null,
    snackbar: false,
    text: "Email not valid.",
    timeout: 3000,
    backend: Vue.config.productionTip ? "http://localhost:3000/" : "http://localhost:3000/",
  }),
  methods: {
    login() {
      const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      };

      if (!this.email && !this.password) return;
      else if (!validateEmail(this.email.trim())) {
        console.log("in here");
        this.snackbar = true;
      }
      axios
        .post(`${this.backend}api/user/login`, { email: this.email, password: this.password }, {withCredentials: true})
        .then((response) => {
          this.spinner = false;
          var data = response.data;
          if (!data.success) {
            this.show_err = true;
            this.err_message = data.msg || "Error Signing in. Please try again later.";
          } else {
            if(data.isadmin){
            localStorage.admin = true;
            this.$router.push({ path: "/members" });
            }
            this.$router.push({ path: "/" });
          }
        })
        .catch((error) => {
          this.spinner = false;
          this.show_err = true;
          this.err_message = JSON.stringify(error) || "Error Signing Up. Please try again later.";
        });
    },
  },
};
</script>

<style lang="scss"></style>
