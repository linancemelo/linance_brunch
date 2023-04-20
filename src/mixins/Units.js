import Swal from "sweetalert2";

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

export default {
	isEmpty,
	confirmAlert,
	simpleAlert,
	parseJwt
};
