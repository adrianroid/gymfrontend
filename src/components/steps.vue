<template>
  <div class>
    <div class="bg-greem-light h-1"></div>
    <div class="flex">
      <div class="flex-1" v-for="s in steps" :key="s">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["steps", "step"]
};
</script>