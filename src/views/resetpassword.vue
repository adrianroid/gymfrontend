<template>
  <!-- component -->
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div style="width:100%" class=" mb-1">
        <img
          class="self-center"
          style="margin: auto;"
          width="200"
          src="../assets/logo.png"
        />
      </div>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
        <div class="px-5 py-7" v-if="!linksent">
          <label class="font-semibold text-sm text-gray-600 pb-1 block"
            >E-mail or Phone Number</label
          >
          <input
            type="text"
            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full border border-gray-300 border-solid"
          />
          <button
            type="button"
            class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
          >
            <span class="inline-block mr-2">Send Link</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-4 h-4 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
        <div class="px-5 py-7 font-normal text-lg font-bold" v-if="linksent">
          Link has sent to you email or phone for password reset.
          <div class="text-center whitespace-nowrap mt-2">
            <router-link to="login">
            <button
              class="transition duration-200 mx-5 px-5  cursor-pointer font-normal text-lg rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
            >
              <span class="inline-block ml-1">Login</span>
            </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resetPassword",
  // computed: {
  //   passwordMatch() {
  //     return () => this.password === this.verify || "Password must match";
  //   },
  // },

  data: () => ({
    linksent: false,
  }),
  methods: {},
};
</script>

<style lang="scss"></style>
