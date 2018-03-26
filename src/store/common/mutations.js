/**
 * mutations
 * create by lqy 2018/3/26
 */

import { MAIN_TITLE } from './mutation-types';

const mutations = {
  // 改变登录状态
  [MAIN_TITLE](state, value) {
    state.mainTitle = value;
  },
};

export default mutations;
