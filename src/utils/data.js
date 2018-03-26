/**
 * data
 * create by lqy 2018/3/26
 */

const setMainTitle = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    });
  });
};

export {
  setMainTitle,
};
