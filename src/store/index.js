import Vue from "vue";

import Vuex from "vuex";
import motos from "../utils";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    motos: motos,
  },
  mutations: {},
});

export default store;
