
<template>
  <div class="flex flex-col justify-center sm:py-12">
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
      <div>
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
        <div v-if="step == 2"></div>
        <div v-if="step == 3"></div>
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
    step: 1,
  }),
};
</script>

<style lang="scss">
</style>
