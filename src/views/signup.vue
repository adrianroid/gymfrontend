<template>
  <v-app>
    <div class="flex flex-col justify-center sm:py-12" style="background-color: whitesmoke !important; height: 100vh">
      <steps :steps="3" :step="step"></steps>
      <div class="m-3">
        <div style="width: 100%" class="mb-1">
          <img class="self-center" style="margin: auto" width="200" src="../assets/logo.png" />
        </div>
        <div
          v-if="!spinner"
          class="shadow overflow-hidden sm:rounded-md px-4 py-5 bg-white sm:p-6"
          style="
          px-4 py-5 bg-white sm:p-6
            background: 0% 0% no-repeat padding-box padding-box;
            box-shadow: rgb(0 76 110 / 16%) 0px 1px 9px;
            border-radius: 7px;
          "
        >
          <div v-if="step == 1">
            <div class="md:col-span-2">
              <form action="#" method="POST">
                <!-- <div class="px-4 py-5 bg-white sm:p-6"> -->
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input v-model="signUpForm.first_name" type="text" name="first_name" id="first_name" autocomplete="given-name" class="h-9 mt-1 block w-full shadow-sm sm:text-sm rounded-md border border-gray-300 border-solid" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input v-model="signUpForm.last_name" type="text" name="last_name" id="last_name" autocomplete="family-name" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md" />
                  </div>

                  <!-- <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div> -->
                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal_code" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input v-model="signUpForm.phone" type="text" name="phone" id="phone" autocomplete="phone" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md" />
                  </div>
                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input v-model="signUpForm.email" type="email" name="email" id="email" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="signUpForm.password" type="password" name="password" id="password" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md" />
                  </div>
                </div>
                <!-- </div> -->
                <!-- <div v-if="!image">
              <h2>Select an image</h2>
              <input type="file" @change="onFileChange">
            </div>
            <div v-else>
              <img :src="image" />
              <button @click="removeImage">Remove image</button>
            </div> -->

                <div class="px-4 py-5">
                  <label class="block text-sm font-medium text-gray-700">
                    Photo
                  </label>
                  <div class="mt-1 flex items-center" v-if="image">
                    <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <img :src="image" class="signup-img" />

                      <!-- <div class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> -->
                      <!-- </div> -->
                      <!-- <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg> -->
                    </span>
                    <button @click="removeImage" type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Remove image
                    </button>
                    <!-- <button type="button"> -->
                    <!-- </button> -->
                  </div>
                  <div v-else>
                    <input type="file" id="image" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @change="onFileChange" />
                  </div>
                </div>
                <div class="px-4 py-3 text-right sm:px-6">
                  <button @click="goNext()" type="button" style="width: 100%" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div v-if="step == 2">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <label for="card_number" class="block text-sm font-medium text-gray-700">Card Number</label>
                <input v-model="signUpForm.card_number" type="text" name="card_number" id="card_number" autocomplete="street-address" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md" />
              </div>
              <div class="col-span-2">
                <label for="exp_month" class="block text-sm font-medium text-gray-700">Exp Month</label>
                <input v-model="signUpForm.expMonth" type="text" name="exp_month" id="exp_month" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-gray-300 border-solid border rounded-md" />
              </div>
              <div class="col-span-2">
                <label for="exp_year" class="block text-sm font-medium text-gray-700">Exp Year</label>
                <input v-model="signUpForm.cvv" type="text" name="exp_year" id="exp_year" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-gray-300 border-solid border rounded-md" />
              </div>
              <div class="col-span-2">
                <label for="exp_year" class="block text-sm font-medium text-gray-700">CVV</label>
                <input v-model="signUpForm.expYear" type="text" name="exp_year" id="exp_year" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-gray-300 border-solid border rounded-md" />
              </div>

              <div class="col-span-4">
                <label for="state" class="block text-sm font-medium text-gray-700">Zip Code</label>
                <input v-model="signUpForm.postalCode" type="text" name="Zip Code" id="exp_year" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md" />
              </div>
            </div>
            <hr class="mt-5 mb-5" />
            <!-- <v-simple-table
              style="max-width: 400px !important; border: solid lightgrey 1px"
              dense
            >
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>
                      <strong style="">{{ months[nextMonth] }} 1st</strong>
                    </td>
                    <td
                      style="
                        font-weight: bold;
                        text-align: center;
                        vertical-align: middle;
                      "
                    >
                      <strong style=""
                        >${{ monthly }} + ${{
                          parseFloat(monthly * 0.035).toFixed(2)
                        }}</strong
                      >
                    </td>
                  </tr>
                  <tr style="color: crimson">
                    <td><strong style="">Due Today</strong></td>
                    <td
                      style="
                        font-weight: bold;
                        text-align: center;
                        vertical-align: middle;
                      "
                    >
                      <strong style="">${{ cost() }}</strong>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table> -->
            <!-- <div
              class="flex space-x-4 space-x text-lg font-medium text-gray-700"
            >
              <span>Due Today</span>
              <span class="ml-8">${{ cost() }}</span>
            </div>
            <div
              class="flex space-x-4 space-x text-lg font-medium text-gray-700"
            >
              <span>Due {{months[nextMonth]}}</span>
              <span class="ml-8">${{ cost() }}</span>
            </div> -->
            <div class="text-right sm:px-6" style="margin-top: 20px">
              <button @click="submitPayment" type="submit" style="width: 100%" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div v-if="spinner" class="self-center" style="position: relative">
          <v-progress-circular indeterminate color="primary" style="position: absolute; top: 50%; left: 50%"></v-progress-circular>
        </div>
      </div>
      <v-alert v-if="show_err" type="error" class="ml-3 mr-3" style="background: rgb(220, 38, 38) !important">
        {{ err_message }}
      </v-alert>
    </div>
  </v-app>
</template>
<script>
import steps from "../components/steps.vue";
import Payment from "../components/payment.vue";
import axios from "axios";
import Vue from "vue";
import { mapGetters } from 'vuex'
export default {
  name: "SignUp",
  components: {
    steps,
    Payment,
  },
  // computed: {
  //   passwordMatch() {
  //     return () => this.password === this.verify || "Password must match";
  //   },
  // },

  data: () => ({
    monthly: 79,
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    nextMonth: (new Date().getMonth() + 1) % 12,
    step: 1,
    image: "",
    imageData: null,
    spinner: false,
    show_err: false,
    err_message: "Error Code 101.",
    signUpForm: {
      first_name: null,
      last_name: null,
      email: null,
      card: null,
      expMonth: null,
      expYear: null,
      cvv: null,
      cardHolderName: null,
      postalCode: null,
      amount: null,
      password: null,
      phone: null,
    },
  }),
  computed: {
    ...mapGetters(["backendUrl"]),
  },
  mounted() {},
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      var fileMB = files[0].size / 1024000;
      var im = document.getElementById("image");
      if (20 < fileMB) {
        this.show_err = true;
        this.err_message = "Max File Size upload if 20MB";
        im.value = "";
        return;
      }
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
        console.log(this.image);
      };
      reader.readAsDataURL(file);
      this.imageData = {
        name: file.name,
        size: file.size,
        type: file.type,
      };
    },
    removeImage: function(e) {
      this.image = "";
      this.imageData = null;
    },
    goNext() {
      var tmp_obj = {
        fname: this.signUpForm.first_name,
        lname: this.signUpForm.last_name,
        e: this.signUpForm.email,
        p: this.signUpForm.password,
        ph: this.signUpForm.phone,
      };
      const isEmpty = () => {
        for (var prop in tmp_obj) {
          if (tmp_obj[prop] == null || tmp_obj[prop] === "") return true;
        }
        return false;
      };
      const validateEmail = (email) => {
        email = (email + "").trim();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !re.test(email);
      };
      if (isEmpty()) {
        this.err_message = "Please complete form.";
        this.show_err = true;
      } else if (validateEmail(tmp_obj.e)) {
        this.show_err = false;
        setTimeout(() => {
          this.err_message = "Email address is not valid";
          this.show_err = true;
        }, 500);
      } else this.step += 1;
    },
    cost() {
      var pricepermonth = this.monthly;
      var dt = new Date();
      var month = dt.getMonth();
      var day = dt.getDate();
      var year = dt.getFullYear();

      if (month == 11) var nextMonth = new Date(year + 1, 0, 1);
      else var nextMonth = new Date(year, month + 1, 1);

      var today = new Date(year, month, day);

      var remain = (nextMonth.getTime() - today.getTime()) / 1000;
      remain = remain / (60 * 60 * 24);
      var totaldays = day + remain;
      var priceperday = pricepermonth / totaldays;

      var remainingprice = priceperday * remain;
      // alert(remainingprice);
      return parseFloat(remainingprice).toFixed(2);
    },
    submitPayment() {
      var tmp_obj = {
        fname: this.signUpForm.first_name,
        lname: this.signUpForm.last_name,
        e: this.signUpForm.email,
        p: this.signUpForm.password,
        ph: this.signUpForm.phone,
      };
      const isEmpty = () => {
        for (var prop in tmp_obj) {
          if (tmp_obj[prop] == null || tmp_obj[prop] === "") return true;
        }
        return false;
      };
      if (isEmpty()) {
        this.err_message = "Please complete form.";
        this.show_err = true;
        return;
      }

      axios
        .post(
          `${this.backendUrl}/api/user/registerUser`,
          {
            ...this.signUpForm,
            amount: this.cost(),
            image: this.image,
          },
          { headers: { "Bypass-Tunnel-Reminder": true } }
        )
        .then((response) => {
          this.spinner = false;
          var data = response.data;
          if (!data.success) {
            this.show_err = true;
            this.err_message = data.msg || "Error Signing Up. Please try again later.";
          } else {
            this.$router.push({ name: "Home" });
          }
        })
        .catch((error) => {
          this.spinner = false;
          this.show_err = true;
          this.err_message = JSON.stringify(error) || "Error Signing Up. Please try again later.";
        });
    },
    uploadToCloudinary() {},
  },
};
</script>

<style lang="scss">
.signup-img {
  height: 100%;
  width: 100%;
}
</style>
