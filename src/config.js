/**
 * config
 * create by lqy 2018/3/26
 */

let apiHopst = `${location.protocol}//${location.host}/api/`;

if (process.env.NODE_ENV === 'development') {
  console.log('开发');
} else {
  console.log('生产');
  apiHopst = `${location.protocol}//${location.host}`;
  console.log(apiHopst);
}

export default {
  apiHopst,
};
