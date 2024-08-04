import { PORT1 } from "@/api/config/servicePort";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params) => {
	return http.post(PORT1 + `/login`, params);
};

// * 获取按钮权限
export const getAuthorButtons = () => {
	return http.get(PORT1 + `/auth/buttons`);
};

// * 获取菜单列表
export const getMenuList = () => {
	return http.get(PORT1 + `/menu/list`);
};
