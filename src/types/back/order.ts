import type { ProductInfo } from "@/types/back/product.ts";

export type OrderInfo = {
  create_at: number;
  id: string;
  is_paid: boolean;
  num: number;
  paid_date: number;
  products: Products;
  total: number;
  user: UserInfo;
};

export type Products = {
  [key: string]: {
    final_total: number;
    id: string;
    product: ProductInfo;
    product_id: string;
    qty: number;
    total: number;
  };
};

export type UserInfo = {
  address: string;
  email: string;
  name: string;
  tel: string;
};

export type OrderListObj = Omit<OrderInfo, "user" | "create_at"> & UserInfo & { create_at: string };
