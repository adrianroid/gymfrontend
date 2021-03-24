
<template>
<div>
<qrcode-stream @decode="onDecode"></qrcode-stream>
</div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
  name: "qrreader",
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data: () => ({

  }),
  methods: {
  onDecode (decodedString) {
    // ...
  }
}
};
</script>
