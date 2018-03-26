/**
 * index
 * create by lqy 2018/3/26
 */

import Vue from 'vue';
import Vuex from 'vuex';
import common from './common';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
  },
});
