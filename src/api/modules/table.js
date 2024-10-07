/* 
 表格模块
*/
import { PORT1 } from "../../api/config/servicePort.js";
import http from "../../api/index.js";
/* 用户登录接口 */
export const getTableList = (params) => {
  return http.get(PORT1 + `/getData`, params);
};
