import { useStore } from "@/store/index.js";
import moment from "moment";
import Swal, { SweetAlertIcon, SweetAlertOptions } from "sweetalert2";
import { useCookies } from "vue3-cookies";

export const useUnits = () => {
  const { cookies } = useCookies();
  const store = useStore();
  /**
   *
   * 查看data是否為空
   * @param {*} data
   */
  const isEmpty = (data: any) => {
    return (
      typeof data !== "number" &&
      typeof data !== "boolean" &&
      (!data || data === "undefined" || Object.keys(data).length === 0)
    );
  };
  // https://vue3-course-api.hexschool.io/api/liang-api/admin/products/
  const callApi = (
    url: string,
    method: string,
    param: any,
    isVerify = false
  ) => {
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
   * @param html
   * @param button
   * @param timer 顯示時間(時間到消失，單位為毫秒)
   */
  const errorAlert = (
    title: string,
    text: string,
    icon: SweetAlertIcon,
    html: string,
    button: boolean,
    timer: number
  ) => {
    const swalSetting: SweetAlertOptions = {
      title,
      text,
      icon,
      html,
      showConfirmButton: button,
      showCancelButton: false,
      heightAuto: false,
    };
    if (timer !== -1) {
      swalSetting.timer = timer;
    }
    Swal.fire(swalSetting);
  };
  const simpleAlert = (title: string, icon: SweetAlertIcon) => {
    errorAlert(title, "", icon, "", true, -1);
  };
  /**
   * Sweet Alert 確認視窗
   * @param title
   * @param icon
   * @returns {Promise<boolean>}
   */
  const confirmAlert = async (title: string, icon: SweetAlertIcon) => {
    let check = false;
    await Swal.fire({
      title: title,
      text: "",
      icon: icon,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "確定",
      confirmButtonColor: "#007bff",
      cancelButtonText: "取消",
      cancelButtonColor: "gray",
    }).then((result) => {
      check = result.isConfirmed;
    });
    return check;
  };
  /**
   * 解析token
   * @param {*} token
   */
  const parseJwt = (token: string) => {
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
  const setCookie = (name: string, value: string, days: number) => {
    const deadline: number = moment().add(days, "days").endOf("days").valueOf();
    const date = new Date();
    date.setTime(deadline);
    cookies.set(name, value, date);
  };
  const getCookie = (cookieName: string) => {
    if (cookies.isKey(cookieName) && cookies.get(cookieName)) {
      return cookies.get(cookieName);
    }
    return "";
  };
  const removeCookie = (cookieName: string) => {
    cookies.remove(cookieName, "");
  };
  const clickById = (id: string) => {
    (document.getElementById(id) as HTMLElement).click();
  };
  const findObjInArr = (
    array: any[],
    targetKey: string,
    targetValue: string | number
  ) => {
    return array.find((item) => item[targetKey] === targetValue);
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
    findObjInArr,
  };
};
