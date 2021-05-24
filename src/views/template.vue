<template>
  <v-app id="table-report">
    <v-data-table hide-default-footer :items="los_items" :headers="los_headers" fix-header :loading="loading" loading-text="Loading..." :single-expand="singleExpand" :mobile-breakpoint="0" :expanded.sync="expanded" item-key="nsid" show-expand class=" table-report transparent elevation-0 my-4" disable-pagination disable-sort v-if="!show_err">
      <template v-slot:top>
        <v-row align="center">
          <v-col class="d-flex" cols="12" sm="6">
            <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="months" label="Select Month" :item-text="'period'" v-model="month_selected" :item-value="'value'" @change="changeDate($event)" class="mx-4"></v-select>
          </v-col>
        </v-row>
      </template>
      <template slot="body.prepend">
        <tr class="totals">
          <td class="text-right child-header" colspan="1"></th>
          <td class="text-left child-header td-border-style" colspan="1" style="font-size: 25px;">Totals:</td>
          <td class="text-center child-header td-border-style border-right" colspan="1">-</td>
          <td class="text-center child-header td-border-style" colspan="1">-</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {}).A_Books || "-" }}</td>
          <td class="text-center child-header td-border-style border-right" colspan="1">{{ (totals || {}).E_Books || "-" }}</td>
          <td class="text-center child-header td-border-style border-right" colspan="1">{{ (totals || {}).Books || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {}).Tickets4ThisMonth || "-" }}</td>
          <td class="text-center child-header td-border-style border-right" colspan="1">{{ (totals || {}).Tickets4ThisMonth || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {}).opens || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {}).trainings || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {})["leaderships"] || "-" }}</td>
          <td class="text-center child-header td-border-style border-right" colspan="1">-</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {})["Paquete Aprender 101"] || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {})["Paquete Aprender 102"] || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {})["Paquete Hacer 201"] || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {})["Paquete Hacer 202"] || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {})["Paquete Hacer 202"] || "-" }}</td>
          <td class="text-center child-header td-border-style" colspan="1">{{ (totals || {}).conventions_tk || "- " }}</td>
        </tr>
      </template>
      <template #header="{}" v-if="!mobile">
        <thead style="background-color:lightblue;">
          <tr>
            <th class="text-center child-header td-border-style" colspan="1"></th>
            <th class="text-center child-header td-border-style" colspan="1"></th>
            <th class="text-center child-header td-border-style border-right" colspan="1"></th>
            <th colspan="3" rowspan="1" class="text-center parent-header td-border-style border-right">
              Digital
            </th>
            <th class="text-center child-header td-border-style border-right" colspan="1"></th>
            <th colspan="2" class="text-center parent-header td-border-style border-right">
              Boletos de Talleres
            </th>
            <th colspan="4" class="text-center parent-header td-border-style border-right">
              Eventos
            </th>
            <th colspan="5" class="text-center parent-header td-border-style border-right">
              Paquetes
            </th>
            <th colspan="1" class="text-center parent-header td-border-style">
              Boletos Convención
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot:[`item.nsicon`]="{ item }">
        <span @click="openNetsuite(item.nsid)">
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="color: lightblue;">
            <g id="ic-actions-new-window">
              <path class="cls-1" d="M22,14.55V20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H9.53" />
              <line class="cls-1" x1="21.39" y1="2.48" x2="9.26" y2="14.09" />
              <path class="cls-1" d="M17,1.9h3.09A1.83,1.83,0,0,1,22,3.62V6.9" />
            </g>
          </svg>
        </span>
      </template>
      <template v-slot:[`item.Hierarchy`]="{ item }">
        <span>{{ item.Hierarchy + " " }}</span>
        <span style="cursor: pointer; color: #2196f3;" @click="openTab(item.usrIBONumber)">
          <span> ({{ item.usrIBONumber }}) </span>
        </span>
      </template>
      <template v-slot:[`item.pnlName`]="{ item }">
        <span style="color:green; font-weight: 900;"> {{ item.pnlName }} </span>
      </template>
      <template v-slot:expanded-item="{ headers, item }">Hola</template>
    </v-data-table>
    <div class="margin-auto" style="margin-top:20px; margin-bottom: 20px;" v-if="bottom_of_page_spinner">
      <v-progress-circular indeterminate color="red"></v-progress-circular>
    </div>
    <div style="margin:50px" v-if="show_err">
      <div style="display: block;">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" style="height:100px;">
          <path fill="white" d="M 4 0.558594 L 6.195312 0.558594 L 6.195312 9.304688 L 4 9.304688 Z" />
          <path fill="rgb(231, 38, 34)" d="M 9.996094 7.085938 L 7.058594 10.007812 L 2.917969 9.996094 L -0.00390625 7.0625 L 0.0078125 2.921875 L 2.945312 0 L 7.082031 0.0117188 L 10.007812 2.945312 Z M 6 2 C 6 1.449219 5.550781 1 5 1 C 4.445312 1 4 1.449219 4 2 L 4 5 C 4 5.550781 4.445312 6 5 6 C 5.550781 6 6 5.550781 6 5 Z M 5 7 C 4.445312 7 4 7.449219 4 8 C 4 8.550781 4.445312 9 5 9 C 5.550781 9 6 8.550781 6 8 C 6 7.449219 5.550781 7 5 7 Z" />
        </svg>
      </div>
      <span class="title-heading">Error: {{ err }}</span>
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { _ } from "vue-underscore";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(["LOSOrders"]),
  },
  data() {
    return {
      los_headers: [
        //Netsuite Icon
        {
          text: "NS",
          align: "start",
          value: "nsicon",
        },
        //User Data
        {
          text: "Hierarchy",
          align: "start",
          value: "Hierarchy",
          fixed: true,
        },
        {
          text: "PIN",
          value: "pnlName",
          align: "center",
          class: "border-right",
          fixed: true,
        },
        //Digital
        {
          text: "Cds",
          align: "center",
          value: "allcds",
        },
        {
          text: "A_Books",
          align: "center",
          value: "A_Books",
        },
        {
          text: "E_Books",
          align: "center",
          value: "E_Books",
          class: "border-right",
        },
        //Libro de mes
        {
          text: "Books",
          align: "center",
          value: "Books",
          class: "border-right",
        },
        //Boletos
        {
          text: "202105",
          align: "center",
          value: "Tickets4ThisMonth",
        },
        {
          text: "202106",
          align: "center",
          value: "Tickets4NextMonth",
          class: "border-right",
        },
        //Eventos
        {
          text: "OP",
          align: "center",
          value: "opens",
        },
        {
          text: "TR",
          align: "center",
          value: "trainings",
        },
        {
          text: "LS",
          align: "center",
          value: "leaderships",
        },
        {
          text: "WS",
          align: "center",
          value: "workshop",
          class: "border-right",
        },

        //Paquetes
        {
          text: "101",
          align: "center",
          value: "Paquete Aprender 101",
        },
        {
          text: "102",
          align: "center",
          value: "Paquete Aprender 102",
        },
        {
          text: "201",
          align: "center",
          value: "Paquete Hacer 201",
        },
        {
          text: "202",
          align: "center",
          value: "Paquete Hacer 202",
        },
        {
          text: "301",
          align: "center",
          value: "Paquete Orquestar 301",
          class: "border-right",
        },
        //Convencion
        {
          text: "Feb 2021",
          align: "center",
          value: "conventions_tk",
        },
        {
          text: "",
          value: "data-table-expand",
        },
      ],
      los_items: [],
      los_items_all: [],
      los_items_tmpSearch: [],
      mobile: false,
      err: "",
      show_err: false,
      loading: true,
      search: "",
      expanded: [],
      singleExpand: true,
      position_index: 0,
      bottom_of_page_spinner: false,
      totals: null,
      months: [],
      month_selected: null,
      pivotVal: null,
    };
  },
  methods: {
    changeDate(event) {
      this.totals = {};
      this.los_items = [];
      this.los_items_all = [];
      this.loading = true;
      setTimeout(() => {
        this.changePivotValue(this.pivotVal, event);
      }, 500);
    },
    customFilter(items, search, filter) {
      search = search.toString().toLowerCase();
      return items.filter((row) => filter(row["type"], search));
    },
    onResize() {
      if (window.innerWidth <= 600) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    scroll() {
      let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;
      console.log(bottomOfWindow);
      if (this.los_items == null || this.los_items.length < 0) return;
      var _i_len = this.los_items.length;
      var _ia_len = this.los_items_all.length;
      var pi = this.position_index;
      if (pi === _ia_len) {
        return;
      }
      if (bottomOfWindow && !this.bottom_of_page_spinner) {
        this.bottom_of_page_spinner = true;
        setTimeout(() => {
          if (_ia_len - _i_len < 100) {
            this.los_items.push(...this.los_items_all.slice(this.position_index, _ia_len));
            this.position_index = _ia_len;
          } else {
            this.los_items.push(...this.los_items_all.slice(this.position_index, this.position_index + 100));
            this.position_index = this.position_index += 100;
          }
        }, 1000);
        setTimeout(() => {
          this.bottom_of_page_spinner = false;
        }, 1500);
      } else if (window.scrollY == 0) {
        this.los_items = this.los_items_all.slice(0, 100);
        this.position_index = 0;
      }
    },
    async changePivotValue(pivot, date) {
      this.loading = true;
      debugger
      if (date == null) date = this.getThisMonth(new Date());
      await this.$store.dispatch("loadLOSOrders", { pivot: pivot, date: date });
      this.$store.subscribe((mutation, state) => {
        this.loading = false;
        if (mutation.type === "SAVE_LOS_ORDERS") {
          if (mutation.payload.success) {
            this.los_items = [];
            this.los_items_all = [];
            debugger;
            var _tot = mutation.payload.data.pop();
            this.totals = JSON.parse(JSON.stringify(_tot));
            this.los_items_all = mutation.payload.data;
            this.los_items_tmpSearch = mutation.payload.data;
            if (100 < mutation.payload.data.length) {
              this.los_items = mutation.payload.data.slice(0, 100);
              this.position_index = 100;
            } else {
              this.los_items = this.los_items_all;
              this.position_index = mutation.payload.data.length;
            }
          } else if (mutation.payload.success === false) {
            this.show_err = true;
            this.err = mutation.payload.error;
          } else {
            this.show_err = true;
            this.err = "Error de systema. Por favor contacta la offecina.";
          }
          window.addEventListener("scroll", this.scroll);
        }
      });
    },
    getThisMonth(date) {
      const year = date.getFullYear().toString();
      const monthNum = date.getMonth() + 1;
      const month = monthNum < 10 ? "0" + monthNum.toString() : monthNum.toString();
      return year + month;
    },
    getNextMonth(date) {
      let nextDate = new Date(date.getFullYear(), date.getMonth());
      nextDate = new Date(nextDate.setMonth(date.getMonth() + 1));
      const monthNum = nextDate.getMonth() + 1;
      const year = nextDate.getFullYear().toString();
      const month = monthNum < 10 ? "0" + monthNum.toString() : monthNum.toString();

      return String(year + month);
    },
    getMonthNames() {
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    },
    getTotalMonths(d1, d2) {
      let months;
      months = (d2.getFullYear() - d1.getFullYear()) * 12;
      months += d1.getMonth() + 1;
      months += d2.getMonth();
      return months <= 0 ? 0 : months;
    },
    getConventionPeriod(year, month) {
      if (month <= 4) {
        year = year - 1;
        month = month + 8;
      } else {
        month = month - 4;
      }
      return year.toString() + (month < 10 ? "0" + month.toString() : month.toString());
    },
    getDates() {
      // get current date
      const now = new Date();
      // get date 1 year ago
      const start = new Date(2020, 0);
      const end = new Date(now.getFullYear() + 1, 11, 31);
      const totalMonths = this.getTotalMonths(start, end);
      const months = [];
      const monthNames = this.getMonthNames();

      for (let x = 0; x < totalMonths; x++) {
        // increment month on each loop
        const date = new Date(start.getFullYear(), start.getMonth() + x);
        // javascript month starts at 0 for jan and ends at 11 for dec, add 1 to month number to offset
        const monthNum = date.getMonth() + 1;

        // check if month is 1-9 and add a preceeding 0 if it is
        const month = monthNum < 10 ? "0" + monthNum.toString() : monthNum.toString();
        const year = date.getFullYear().toString();
        months.push({
          value: year + month,
          period: monthNames[date.getMonth()] + " " + year,
          conventionPeriod: month.match(/^(02|06|10)$/) ? this.getConventionPeriod(year, monthNum) : null,
          date: date,
        });
      }
      this.months = months;
    },
    openTab(ibo) {
      let route = this.$router.resolve(`ordGroup/${ibo}`); // This also works.
      window.open(route.href, "_blank");
    },
    openNetsuite(ibo_id) {
      var ns = `https://3960078.app.netsuite.com/app/common/entity/partner.nl?id=${ibo_id}&e=T&selectedtab=custom12#`;
      window.open(ns, "_blank");
    },
  },
  async created() {
    this.getDates();
    this.month_selected = this.getThisMonth(new Date());
    this.onResize();
    window.addEventListener("resize", this.onResize);
    let tmp_d = new Date();
    try {
      if (this.$route.params.platino) {
        this.pivotVal = this.$route.params.platino;
        this.changePivotValue(this.$route.params.platino, this.getThisMonth(tmp_d));
      } else this.changePivotValue(null, this.getThisMonth(tmp_d));
    } catch (err) {
      this.err = "Error de systema.";
      this.show_err = true;
      this.loading = false;
    }
  },
  mounted() {},
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  watch: {
    search: function(newVal, oldVal) {
      if (newVal === " ") return;

      newVal = newVal.toString().toLowerCase();
      //If the value is less we need to add the full list of platinos again to search from there
      if (newVal.length < oldVal.length) {
        this.los_items_all = this.los_items_tmpSearch;
      }

      //New Search list
      this.los_items = this.los_items_all.filter((row) => row["Hierarchy"].includes(newVal));
      this.los_items_all = this.los_items;
      var _i_len = this.los_items.length;
      var _ia_len = this.los_items_all.length;

      this.position_index = 0; // since it's a new search we want to assume user is on top of the screen search so the position should be 0

      //We only want to show 100 in the list so the ui won't be so slow so when we scroll down we load more
      //If the list is less than 100 then just return since that is our goal
      if (100 < _i_len) {
        this.los_items = this.los_items.slice(0, 100);
      } else {
        this.los_items = this.los_items.slice(0, _ia_len);
      }
    },
  },
};
</script>
<style lang="scss">
#table-report {
  .v-data-table-header {
    background-color: lightgray;
  }
  .border-right {
    border-right: solid gray 1px;
  }
  .border-left {
  }
  .title-heading {
    font-family: "Montserrat", sans-serif !important;
    letter-spacing: 0.18px;
    opacity: 1;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
    font-size: 30px;
  }
  .margin-auto {
    margin: auto 0;
  }
  .row {
    margin: 0px !important;
  }
  td {
    white-space: nowrap;
  }
  .totals {
    th {
      font-size: 25px;
    }
  }
}
.cls-1 {
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: bevel;
  stroke-width: 1.5px;
}
.sticky-table-footer td {
  font-weight: bold;
  position: sticky;
  bottom: 0;
  background-color: #f8f8f8;
  border-top: thin solid rgba(0, 0, 0, 0.12);
}
.btn {
  .totals-button {
    // margin: auto;
    width: 100px;
    height: 50px;
    background: #2d8dfd 0% 0% no-repeat padding-box;
    border-radius: 7px;
    border: none;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    outline: none;
    box-shadow: none;
    color: #ffffff;
    margin-bottom: 10px;
    border-radius: 50px;
    background: #2d8dfd;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  }
}
</style>
