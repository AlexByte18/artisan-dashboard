import { getProducts } from '@/core/products/actions/get-products';
import { useQuery } from "@tanstack/react-query";



export const useProducts = () => {
  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: ( ) => getProducts()
  })
  
  return {
    productsQuery
  }
}
