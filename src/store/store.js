/**
 * @Author: DKing
 * @Date: 2019-08-13
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from "./states";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

