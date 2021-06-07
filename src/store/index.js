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
      const dbRef = firebase.database().ref("/backend");
      dbRef
      .on('value', (snapshot) => {
        console.log((snapshot.val()).url)
        state.backendUrl = (snapshot.val()).url;
      });
        // .then((snapshot) => {
        //   if (snapshot.exists()) {
        //     console.log(state.backendUrl);
        //     state.backendUrl = (snapshot.val()).url;
        //   } else {
        //     state.backendUrl = null;
        //   }
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
    },
  },
  getters:{
    backendUrl: state =>{
      return state.backendUrl;
    },
  },
  actions: {},
  modules: {},
});
