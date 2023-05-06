import Swal from "sweetalert2";
import axios from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

/**
 * 查看data是否為空
 * @param {*} data
 */
const isEmpty = (data) => {
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
const confirmAlert = (title, text, icon, html, button, timer) => {
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
const simpleAlert = (title, icon) => {
	confirmAlert(title, "", icon, "", true, -1);
};

/**
 * 解析token
 * @param {*} token
 */
const parseJwt = (token) => {
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

/**
 * 呼叫api
 * @param url 請求模組
 * @param method 請求方法
 * @param data 請求參數
 */
const callAPI = (url, method, data) => {
	const token = cookies.get("ltkob");
	let baseUrl = import.meta.env.VITE_MY_API;
	const config = {
		url: `${baseUrl}url`,
		method: method,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		},
		data: data
	};
	return new Promise((resolve, reject) => {
		axios(url, config)
			.then(response => {
				resolve(response);
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.data);
					reject(error);
				}
			});
	});
};

export default {
	isEmpty,
	confirmAlert,
	simpleAlert,
	parseJwt,
	callAPI
};
