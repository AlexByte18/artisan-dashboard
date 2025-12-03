import { Heading } from "@radix-ui/themes";
import AuthenticatedLayout from "../shared/AuthenticatedLayout";
import { ProductForm } from "./components/ProductForm";

const ProductsPage = () => {


  return (
    <AuthenticatedLayout>
      <Heading>Product page</Heading>
      <ProductForm />
    </AuthenticatedLayout>
  );
}

export {
  ProductsPage as default
};
