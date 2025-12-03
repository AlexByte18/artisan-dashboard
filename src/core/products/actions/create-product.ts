import { productsApi } from '@/core/api/products-api';
import { isAxiosError } from "axios";
import { type Product } from "../interfaces/product.interface";

export const createProduct = async (data: Product) => {
  console.log("🚀 ~ createProduct ~ data:", data)
  try { 
    const response = await productsApi.post<Product>('/products', { ...data });

    console.log("🚀 ~ createProduct ~ response:", response)
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error;
      console.error("❌ Axios Error:", {
        status: axiosError.response?.status,
        statusText: axiosError.response?.statusText,
        url: axiosError.config?.url,
        message: axiosError.message,
        data: axiosError.response?.data,
      });
    } else {
      console.error("❌ Non-Axios error:", error);
    }

    const message = isAxiosError(error) ? error.message : String(error);
    throw new Error(`Error fetching products: ${message}`);
  }
};