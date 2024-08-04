/* 定义默认数据 */
const defaultState = {
  str: "daahhdahh",
};
/* 导出一个函数 传实际的参数了，就用实际的参数，否则就用defaultState*/
const aReducer = (state = defaultState, action) => {
    return state;
  }
export default aReducer
