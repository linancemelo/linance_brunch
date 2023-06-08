import Swal from "sweetalert2";
import { useStore } from "@/store/index";
import moment from "moment";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

/**
 *
 * 查看data是否為空
 * @param {*} data
 */
export const isEmpty = (data) => {
	return (
		typeof data !== "number" &&
		typeof data !== "boolean" &&
		(!data || data === "undefined" || Object.keys(data).length === 0)
	);
};

/**
 * 確認alert彈跳視窗
 * @param title 標題
 * @param text 內容
 * @param icon warning, error, success, info, question
 * @param timer 顯示時間(時間到消失，單位為毫秒)
 */
export const confirmAlert = (title, text, icon, html, button, timer) => {
	const swalSetting = {
		title: title,
		text: text,
		icon: icon,
		html: html,
		showConfirmButton: button,
		showCancelButton: false,
		heightAuto: false,
	};
	if (timer !== -1) {
		swalSetting.timer = timer;
	}
	Swal.fire(swalSetting);
};
export const simpleAlert = (title, icon) => {
	confirmAlert(title, "", icon, "", true, -1);
};
/**
 * 解析token
 * @param {*} token
 */
export const parseJwt = (token) => {
	const base64Url = token.split(".")[1];
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split("")
			.map((c) => {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);
	return JSON.parse(jsonPayload);
};

export const callApi = (url, method, param, isVerify = false) => {
	const { request } = useStore();
	const token = getCookie("ltk");
	const bearToken = isVerify ? `bear ${token}` : "";
	return request(	{
		url: `${import.meta.env.VITE_MY_API}${url}`,
		method: method,
		data: param,
		headers: {
			"Content-Type": "application/json",
			"Authorization": bearToken
		}
	});
};

export const setCookie = (name, value, days) => {
	const deadline = moment().add(days, "days").endOf("days");
	const date = new Date();
	date.setTime(deadline);
	cookies.set(name, value, date);
};
export const getCookie = (cookieName) => {
	if (cookies.isKey(cookieName) && cookies.get(cookieName)) {
		return cookies.get(cookieName);
	}
	return "";
};
export const removeCookie = (cookieName) => {
	cookies.remove(cookieName, null);
};
