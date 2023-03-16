import { createApp } from "vue";
import App from "../App.vue";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(VueSweetalert2);

export default {
  methods: {
		swalAlert(title, text, icon, html, button, timer) {
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
			this.$swal.fire(swalSetting);
		}
	}
};
