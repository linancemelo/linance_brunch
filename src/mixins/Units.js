import Swal from "sweetalert2";

/**
 * 確認alert彈跳視窗
 * @param {*} title 
 * @param {*} text 
 * @param {*} icon 
 */
const confirmAlert = (title, text, icon) => {
	const swalSetting = {
		title: title,
		text: text,
		icon: icon,
		showConfirmButton: true,
		showCancelButton: false,
		heightAuto: false,
	};
	Swal.fire(swalSetting);
};
export default { confirmAlert };