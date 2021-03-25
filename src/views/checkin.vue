
<template>
<div style="margin: 0 auto;">
    <vue-qrcode style="margin: 0 auto;" :width="500" value="https://www.1stg.me" />
    <h1 style="margin: 0 auto; text-align:center; color: green; font-weight: bold;">Membeship Active</h1>
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
    scale:100
  }),
};
</script>
