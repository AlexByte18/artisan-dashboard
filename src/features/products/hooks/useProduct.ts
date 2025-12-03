import { createProduct } from "@/core/products/actions/create-product";
import type { Product } from "@/core/products/interfaces/product.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useProduct = (productId: string) => {
  // console.log("🚀 ~ useProduct ~ productId:", productId)
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: async (data: Product) => {
      const response = await createProduct(data);
      return response.data
    },
    onSuccess: (data: Product) => {
      queryClient.invalidateQueries({
        queryKey: ['products', 'infinite']
      })
      queryClient.invalidateQueries({
        queryKey: ['products', data.id]
      })
    }
  })

  return {
    productMutation,
  }
}