<template>
  <div class="m-4">
    <template>
      <v-card-title>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table :loading="loading" loading-text="Loading... " :headers="headers" :items="items" :search="search" item-key="email" show-expand :expanded.sync="expanded">
        <template v-slot:item.first_name="{ item }">
          <span>{{ item.first_name + " " + item.last_name }}</span>
        </template>
        <template v-slot:item.first_name="{ item }">
          <span>{{ item.first_name + " " + item.last_name }}</span>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <div>
            <span class="block">CC: {{ item.paymentInfo[0].c_num }}</span>
            <span class="block">CVV: {{ item.paymentInfo[0].c_num }}</span>
            <span class="block">ZipCode: {{ item.paymentInfo[0].postalCode }}</span>
          </div>
          <!-- <td :colspan="headers.length">

            </td> -->
        </template>
      </v-data-table>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "members",

  data: () => ({
    search: "",
    loading: true,
    backend: "http://localhost:3000/",
    items: [],
    expanded: [],
    headers: [
      {
        text: "Status",
        align: "start",
        value: "first_name",
      },
      {
        text: "Name",
        align: "start",
        value: "first_name",
      },
      {
        text: "Phone",
        align: "start",
        value: "phone",
      },
      {
        text: "Email",
        align: "start",
        value: "email",
      },
      { text: "", value: "data-table-expand" },
    ],
  }),
  created() {
    this.loading = true;
    axios
      .get(`${this.backend}api/user/getAllUsers`, { withCredentials: true })
      .then((response) => {
        this.loading = false;
        var data = response.data;
        if (!data.success) {
          this.show_err = true;
          this.err_message = data.msg || "Error Signing in. Please try again later.";
        } else {
          this.items = data.items;
        }
      })
      .catch((error) => {
        this.loading = false;
        // this.show_err = true;
        // this.err_message = JSON.stringify(error) || "Error Signing Up. Please try again later.";
      });
  },
  methods: {
    getMembers() {},
  },
};
</script>
