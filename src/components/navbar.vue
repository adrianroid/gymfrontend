<template>
  <div class=" flex items-center justify-center bg-gray-100">
    <div class="flex w-full max-w-xs  bg-white">
      <ul class="flex flex-col w-full">
        <!-- <li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
						<span class="flex items-center justify-center text-lg text-gray-400">
							<svg fill="none"
								 stroke-linecap="round"
								 stroke-linejoin="round"
								 stroke-width="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 class="h-6 w-6">
								<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
							</svg>
						</span>
						<span class="ml-3">Dashboard</span>
						<span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-200 h-6 px-2 rounded-full ml-auto">3</span>
					</a>
				</li> -->
        <!-- <li class="my-px">
					<span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Projects</span>
				</li> -->
        <li class="my-px">
          <router-link
            to="/"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
           <v-icon>mdi-account-circle-outline</v-icon>
            </span>
            <span class="ml-3">Check In</span>
          </router-link>
        </li>
        <li class="my-px">
          <router-link
            to="invoices"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span
              class="flex items-center justify-center text-lg text-gray-400"
            >
              <v-icon>mdi-receipt</v-icon>
            </span>
            <span class="ml-3">Invoices</span>
          </router-link>
        </li>
        <li class="my-px">
          <div
            style="cursor: pointer;color:red!important;"
            class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <span class="flex items-center justify-center text-lg text-red-400">
              <v-icon style="color:red!important;">mdi-logout</v-icon>
            </span>
            <span class="ml-3">Logout</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    open: false,
  }),
  methods: {},
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
