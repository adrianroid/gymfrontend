
<template>
<div>
    <vue-qrcode value="https://www.1stg.me" />
</div>
</template>

<script>
import VueQrcode from 'vue-qrcode'
export default {
  name: "checkin",
  components:{
    VueQrcode
  },
  data: () => ({
  }),
};
</script>
