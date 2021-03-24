<template>
<div>
  <div class="m-5" v-for="i in invoices" :key="i.auth">
    <v-card 
      class="p-8"
      style="background: 0% 0% no-repeat padding-box padding-box;
            box-shadow: rgb(0 76 110 / 16%) 0px 1px 9px;
            border-radius: 7px;
            "
      elevation="4"
    >
      <span style="display:block">
        Date: {{i.date}}
      </span>
      <span style="display:block">
        Success: {{i.success}}
      </span>
    </v-card>
  </div>
  </div>
</template>

<script>
export default {
  name: "invoice",
  data: () => ({
    invoices:[{
      auth: 1234,
      date: '03/24/21',
      sucess: "true"
    },
    {
      auth: 5678,
      date: '04/24/21',
      sucess: "true"
    }
    ]
  }),
  methods: {},
};
</script>
