import Swal from "sweetalert2";
import { useStore } from "@/store/index.js";
import moment from "moment";
import { useCookies } from "vue3-cookies";

export const useUnits = () => {
  const { cookies } = useCookies();
  const store = useStore();
  /**
   *
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
  // https://vue3-course-api.hexschool.io/api/liang-api/admin/products/
  const callApi = (url, method, param, isVerify = false) => {
    return store.request({
      url: `${import.meta.env.VITE_MY_API}/${url}`,
      method: method,
      data: param,
      headers: {
        "Content-Type": "application/json",
        Authorization: isVerify ? getCookie("ltk") : "",
      },
    });
  };
  /**
   * 確認alert彈跳視窗
   * @param title 標題
   * @param text 內容
   * @param icon warning, error, success, info, question
   * @param timer 顯示時間(時間到消失，單位為毫秒)
   */
  const errorAlert = (title, text, icon, html, button , timer) => {
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
    errorAlert(title, "", icon, "", true, -1);
  };
  /**
   * Sweet Alert 確認視窗
   * @param title
   * @param icon
   * @returns {Promise<boolean>}
   */
  const confirmAlert = async(title, icon) => {
    let check = false;
    await Swal
        .fire({
          title: title,
          text: "",
          icon: icon,
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonText: "確定",
          confirmButtonColor: "#007bff",
          cancelButtonText: "取消",
          cancelButtonColor: "gray",
        })
        .then((result) => {
          check = result.isConfirmed;
        });
    return check;
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
  const setCookie = (name, value, days) => {
    const deadline = moment().add(days, "days").endOf("days");
    const date = new Date();
    date.setTime(deadline);
    cookies.set(name, value, date);
  };
  const getCookie = (cookieName) => {
    if (cookies.isKey(cookieName) && cookies.get(cookieName)) {
      return cookies.get(cookieName);
    }
    return "";
  };
  const removeCookie = (cookieName) => {
    cookies.remove(cookieName, null);
  };
  const clickById = (id) => {
    document.getElementById(id).click();
  };

  return {
    isEmpty,
    callApi,
    confirmAlert,
    simpleAlert,
    parseJwt,
    setCookie,
    getCookie,
    removeCookie,
    clickById,
  };
};
