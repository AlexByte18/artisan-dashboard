import { productsApi } from '@/core/api/products-api';
import { isAxiosError } from "axios";
import { type Product } from "../interfaces/product.interface";

export const getProducts = async (limit = 20) => {
  console.log("🚀 ~ getProducts ~ limit:", limit)
  try { 
    const { data } = await productsApi.get<Product[]>('/products', {
      // params: { limit, offset }
    });

    console.log("🚀 ~ getProducts ~ data:", data)
    return data;
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
      // No es un error de Axios — puede ser cualquier cosa
      console.error("❌ Non-Axios error:", error);
    }

    // Re-throw con mensaje más útil (mantén la cadena si es posible)
    const message = isAxiosError(error) ? error.message : String(error);
    throw new Error(`Error fetching products: ${message}`);
  }
};