<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";

const { isEmpty, callApi, clickById, simpleAlert, confirmAlert } =
  useUnits();

const props = withDefaults(defineProps<{ action: "create" | "edit" }>(), {
  action: "create",
});
const emits = defineEmits(["refresh"]);

const actionMap = {
  create: "新增",
  edit: "編輯",
};
const couponInfo = ref({
  id: null,
  title: "",
  is_enabled: 1,
  percent: 0,
  due_date: 0,
  code: "",
});
const initCouponInfo = { ...couponInfo.value };

watch(couponInfo, (newVal) => {
  if (isEmpty(newVal)) couponInfo.value = initCouponInfo;
});

const updateCoupon = async () => {
  const actionName = actionMap[props.action];
  const check = await confirmAlert(`確定要${actionName}嗎`, "warning");
  if (check) {
    couponInfo.value.due_date = new Date(couponInfo.value.due_date).getTime();
    const params = {
      data: couponInfo.value,
    };
    let baseUrl = "admin/coupon";
    let method = "POST";
    if (props.action === "edit") {
      baseUrl += `/${couponInfo.value.id}`;
      method = "PUT";
    }
    const result = await callApi(baseUrl, method, params, true);
    if (result.data.success) {
      clickById("CouponModal");
      simpleAlert(`${actionName}成功`, "success");
      emits("refresh");
    } else {
      simpleAlert(`${actionName}失敗`, "error");
    }
  }
};

defineExpose({
  couponInfo,
});
</script>

<template>
  <input type="checkbox" id="CouponModal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box p-0 max-w-full lg:max-w-[75rem] flex flex-col">
      <header class="px-5 py-3 bg-accent">
        <div class="flex justify-between">
          <div class="flex self-center text-base-100 text-lg">
            {{ actionMap[action] }}優惠券
          </div>
          <div
            class="flex self-center cursor-pointer text-base-100 text-lg"
            @click="clickById('CouponModal')"
          >
            <span class="material-symbols-outlined"> close </span>
          </div>
        </div>
      </header>
      <main class="text-neutral px-5 py-3 overflow-auto">
        <div class="grid grid-cols-1 gap-2">
          <div class="form-control">
            <label for="title" class="mb-1 text-sm">優惠券名稱</label>
            <input
              type="text"
              id="title"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="couponInfo.title"
              required
            />
          </div>
          <div class="form-control">
            <label for="title" class="mb-1 text-sm">優惠券代碼</label>
            <input
              type="text"
              id="title"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="couponInfo.code"
              required
            />
          </div>
          <div class="form-control">
            <label for="title" class="mb-1 text-sm">折數</label>
            <input
              type="number"
              id="title"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="couponInfo.percent"
              required
            />
          </div>
          <div class="form-control">
            <label for="title" class="mb-1 text-sm">到期日</label>
            <input
              type="date"
              id="title"
              class="w-full input input-sm input-bordered bg-white"
              v-model.trim="couponInfo.due_date"
              required
            />
          </div>
          <div class="form-control">
            <label for="description" class="mb-1 text-sm">是否有效</label>
            <div class="mb-2 md:ml-5 flex">
              <div class="me-2 flex self-center">
                <input
                  type="radio"
                  name="is_enabled"
                  id="enabled"
                  class="radio radio-xs me-1"
                  v-model="couponInfo.is_enabled"
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
                  v-model="couponInfo.is_enabled"
                  :value="0"
                />
                <label for="disabled" class="text-sm">否</label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="modal-action py-3 pr-5">
        <button class="btn btn-accent" @click="updateCoupon">
          {{ actionMap[action] }}
        </button>
        <label for="CouponModal" class="btn">取消</label>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
