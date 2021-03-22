<template>
            <div class="grid grid-cols-6 gap-6">
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
</template>
<script>
export default {
  name: "payment",
  // computed: {
  //   passwordMatch() {
  //     return () => this.password === this.verify || "Password must match";
  //   },
  // },

  data: () => ({


  }),
  methods: {
  },
};
</script>