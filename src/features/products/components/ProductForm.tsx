import { useForm } from '@/features/shared/hooks/useForm';
import { Box, Button, Flex, TextArea, TextField } from '@radix-ui/themes';
import type { FormEvent } from 'react';
import { useProduct } from '../hooks/useProduct';

interface FormProps {
  id: string;
  title: string;
  description: string;
  price: string;
  slug: string;
  stock: number;
  gender: string;
  tags: string[];
  images: string[];
}

export const ProductForm = () => {
  const { 
    title,
    description,
    price,
    slug,
    onChange,
    formData,
  } = useForm<FormProps>({
    id: 'new',
    title: '',
    description: '',
    price: '',
    slug: '',
    stock: 0,
    gender: '',
    tags: [],
    images: [],
  });

  const { productMutation } = useProduct(formData.id)

  const onSubmit = (event: FormEvent<HTMLFormElement> ) => {
      event.preventDefault();
      console.log("🚀 ~ onSubmit ~ event:", { event })
      console.log("🚀 ~ onSubmit ~ registerData:", { formData })
      productMutation.mutate({ 
        ...formData,
        sizes: [],
      }, {
        onError: () => {
          console.error("❌ >>>Error creating product");
        }
      });
    }

  return (
    <Box p="5">
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="3">
          <TextField.Root
            name="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChange}
          />
          <TextArea 
            name="description"
            placeholder="Description"
            value={description}
            onChange={onChange}
          />

          <TextField.Root
            name="slug"
            type="text"
            placeholder="Slug"
            value={slug}
            onChange={onChange}
          />
          <TextField.Root
            name="price"
            type="text"
            placeholder="Price"
            value={price}
            onChange={onChange}
          />
        </Flex>
        <Button type="submit" mt="5">Save product</Button>
      </form>
    </Box>
  )
}
