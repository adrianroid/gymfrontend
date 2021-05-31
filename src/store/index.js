import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import firebase from "../plugins/firebaseInit";
const db = firebase.database();
export default new Vuex.Store({
  state: {
    backendUrl: null,
  },
  mutations: {
    setUrl(state) {
      const dbRef = firebase.database().ref();
      dbRef
        .child("/backend")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            state.backendUrl = (snapshot.val()).url;
          } else {
            state.backendUrl = null;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  getters:{
    backendUrl: state =>{ // map data
      return state.backendUrl;
    },
  },
  actions: {},
  modules: {},
});
