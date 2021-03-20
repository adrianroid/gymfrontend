
<template>
  <div>
    <div
      class="flex flex-col justify-center sm:py-12"
      style="background-color: whitesmoke !important; height: 100vh"
    >
      <steps :steps="3" :step="step"></steps>
      <div class="m-3">
        <div style="width: 100%" class="mb-1">
          <img
            class="self-center"
            style="margin: auto"
            width="200"
            src="../assets/logo.png"
          />
        </div>
        <div
          class="shadow overflow-hidden sm:rounded-md"
          style="
            background: 0% 0% no-repeat padding-box padding-box
              rgb(255, 255, 255);
            box-shadow: rgb(0 76 110 / 16%) 0px 1px 9px;
            border-radius: 7px;
          "
        >
          <div v-if="step == 1">
            <div
              class="bg-white shadow-md rounded px-8 pt-6 mb-4 flex flex-col my-2"
            >
              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="step == 2">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-700"
                        >First name</label
                      >
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="h-9 mt-1 block w-full shadow-sm sm:text-sm rounded-md border border-gray-300 border-solid"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                        >Last name</label
                      >
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md"
                      />
                    </div>

                    <!-- <div class="col-span-6 sm:col-span-4">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div> -->

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="state"
                        class="block text-sm font-medium text-gray-700"
                        >Email address</label
                      >
                      <input
                        type="text"
                        name="state"
                        id="state"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="postal_code"
                        class="block text-sm font-medium text-gray-700"
                        >Phone Number</label
                      >
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md"
                      />
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="block text-sm font-medium text-gray-700"
                        >Street address</label
                      >
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autocomplete="street-address"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md"
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="city"
                        class="block text-sm font-medium text-gray-700"
                        >City</label
                      >
                      <input
                        type="text"
                        name="city"
                        id="city"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-gray-300 border-solid border rounded-md"
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="state"
                        class="block text-sm font-medium text-gray-700"
                        >State</label
                      >
                      <input
                        type="text"
                        name="state"
                        id="state"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md"
                      />
                    </div>

                    <div class="col-span-2">
                      <label
                        for="postal_code"
                        class="block text-sm font-medium text-gray-700"
                        >ZIP</label
                      >
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
                        class="h-9 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 border-solid border rounded-md"
                      />
                    </div>
                  </div>
                </div>
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
                    <span
                      class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                    >
                      <img :src="image" class="signup-img" />

                      <!-- <div class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> -->
                      <!-- </div> -->
                      <!-- <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg> -->
                    </span>
                    <button
                      @click="removeImage"
                      class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove image
                    </button>
                    <!-- <button type="button"> -->
                    <!-- </button> -->
                  </div>
                  <div v-else>
                    <input
                      type="file"
                      class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      @change="onFileChange"
                    />
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    style="width: 100px"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div v-if="step == 3"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import steps from "../components/steps.vue";
export default {
  name: "SignUp",
  components: {
    steps,
  },
  // computed: {
  //   passwordMatch() {
  //     return () => this.password === this.verify || "Password must match";
  //   },
  // },

  data: () => ({
    step: 2,
    image: "",
  }),
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
    },
  },
};
</script>

<style lang="scss">
.signup-img {
  height: 100%;
  width: 100%;
  // width: 30%;
  // margin: auto;
  // display: block;
  // margin-bottom: 10px;
}
</style>
