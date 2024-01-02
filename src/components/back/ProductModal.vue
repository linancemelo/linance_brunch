<script setup lang="ts">
import Axios from "axios";
import { useUnits } from "@/composables/units.ts";
import type { Action } from "@/types/components/action.ts";

const { isEmpty, getCookie, callApi, clickById, simpleAlert, confirmAlert } =
  useUnits();

const { action = "create" } = defineProps<{
  action: Action;
}>();
const emits = defineEmits(["refresh"]);

const actionMap = {
  create: "新增",
  edit: "編輯",
};
const productInfo = ref({
  id: null,
  title: "",
  category: "",
  origin_price: null,
  price: null,
  unit: "",
  description: "",
  content: "",
  is_enabled: 1,
  imageUrl: "",
  imagesUrl: [],
});
const initProductInfo = { ...productInfo.value };
const imgFileInputRef = ref<any>(null);

watch(productInfo, (newVal) => {
  if (isEmpty(newVal)) productInfo.value = initProductInfo;
});

const updateProduct = async () => {
  const actionName = actionMap[action];
  const check = await confirmAlert(`確定要${actionName}嗎`, "warning");
  if (check) {
    const params = {
      data: productInfo.value,
    };
    let baseUrl = "admin/product";
    let method = "POST";
    if (action === "edit") {
      baseUrl += `/${productInfo.value.id}`;
      method = "PUT";
    }
    const result = await callApi(baseUrl, method, params, true);
    if (result.data.success) {
      clickById("ProductModal");
      simpleAlert(`${actionName}成功`, "success");
      emits("refresh");
    } else {
      simpleAlert(`${actionName}失敗`, "error");
    }
  }
};
const uploadImg = async () => {
  const imgFile = imgFileInputRef.value.files[0];
  const formData = new FormData();
  formData.append("file-to-upload", imgFile);
  const result = await Axios({
    url: `${import.meta.env.VITE_MY_API}/admin/upload`,
    method: "POST",
    data: formData,
    headers: {
      Authorization: getCookie("ltk"),
    },
  });
  if (result.data.success) {
    productInfo.value.imageUrl = result.data.imageUrl;
    imgFileInputRef.value.value = "";
  }
};

defineExpose({
  productInfo,
});
</script>

<template>
  <input type="checkbox" id="ProductModal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box p-0 max-w-full lg:max-w-[75rem] flex flex-col">
      <header class="px-5 py-3 bg-accent">
        <div class="flex justify-between">
          <div class="flex self-center text-base-100 text-lg">
            {{ actionMap[action] }}產品
          </div>
          <div
            class="flex self-center cursor-pointer text-base-100 text-lg"
            @click="clickById('ProductModal')"
          >
            <span class="material-symbols-outlined"> close </span>
          </div>
        </div>
      </header>
      <!-- 主要區塊 -->
      <main class="md:flex text-neutral px-5 py-3 overflow-auto">
        <div class="md:w-2/3 grid grid-cols-2 gap-2">
          <div class="form-control">
            <label for="title" class="mb-1 text-sm">產品名稱</label>
            <input
              type="text"
              id="title"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="productInfo.title"
              required
            />
          </div>
          <div class="form-control">
            <label for="category" class="mb-1 text-sm">種類</label>
            <input
              type="text"
              id="category"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="productInfo.category"
              required
            />
          </div>
          <div class="form-control">
            <label for="origin_price" class="mb-1 text-sm">原價</label>
            <input
              type="number"
              id="origin_price"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="productInfo.origin_price"
              required
            />
          </div>
          <div class="form-control">
            <label for="price" class="mb-1 text-sm">售價</label>
            <input
              type="number"
              id="price"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="productInfo.price"
              required
            />
          </div>
          <div class="form-control">
            <label for="unit" class="mb-1 text-sm">單位</label>
            <input
              type="text"
              id="unit"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="productInfo.unit"
              required
            />
          </div>
          <div class="form-control">
            <label for="description" class="mb-1 text-sm">說明</label>
            <input
              type="text"
              id="description"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="productInfo.description"
            />
          </div>
          <div class="form-control col-span-2">
            <label for="content" class="mb-1 text-sm">詳細內容</label>
            <textarea
              id="content"
              rows="5"
              class="textarea textarea-bordered bg-white"
              v-model.trim="productInfo.content"
            />
          </div>
          <div class="form-control md:flex md:flex-row">
            <label for="description" class="mb-1 text-sm">是否有庫存</label>
            <div class="mb-2 md:ml-5 flex">
              <div class="me-2 flex self-center">
                <input
                  type="radio"
                  name="is_enabled"
                  id="enabled"
                  class="radio radio-xs me-1"
                  v-model="productInfo.is_enabled"
                  :value="1"
                />
                <label for="enabled" class="text-sm">是</label>
              </div>
              <div class="flex self-center">
                <input
                  type="radio"
                  name="is_enabled"
                  id="disabled"
                  class="radio radio-xs me-1"
                  v-model="productInfo.is_enabled"
                  :value="0"
                />
                <label for="disabled" class="text-sm">否</label>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/3 md:px-5">
          <div class="form-control">
            <label for="title" class="mb-1 text-sm">圖片網址</label>
            <input
              type="text"
              id="title"
              class="w-full input input-sm input-bordered bg-white"
            />
          </div>
          <div class="form-control mt-2">
            <label for="title" class="mb-1 text-sm">上傳圖片</label>
            <input
              ref="imgFileInputRef"
              type="file"
              name="file-to-upload"
              class="bg-white"
              @change="uploadImg"
            />
            <img :src="productInfo.imageUrl" alt="" class="mt-2" />
          </div>
        </div>
      </main>
      <footer class="modal-action py-3 pr-5">
        <button class="btn btn-accent rounded" @click="updateProduct">
          {{ actionMap[action] }}
        </button>
        <label for="ProductModal" class="btn rounded">取消</label>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
