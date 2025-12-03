import type { Product } from "@/core/products/interfaces/product.interface"
import { CardStackPlusIcon } from "@radix-ui/react-icons"
import { Avatar, Badge, Box, Button, Card, Flex, Heading, Table } from "@radix-ui/themes"
import { NavLink } from "react-router"

interface Props {
  products: Product[]
}

export const ProductsList = ({ products }: Props) => {
  return (
    <Card>
      <Box p="5">
        <Flex justify="between" align="center" mb="5">

        <Heading>Products list</Heading>
        <NavLink to="/products/new">
          <Button size="3">
            <CardStackPlusIcon />
            Agregar nuevo producto
          </Button>
        </NavLink>
        </Flex>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Tags</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Stock</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            products?.map((product: Product) => (
              <Table.Row>
                <Table.RowHeaderCell>
                  <Avatar fallback="A" />
                  {product.title}
                </Table.RowHeaderCell>
                <Table.Cell>
                  {
                    product.tags.map((tag: string) => (
                      <Badge variant="solid" radius="full" color="indigo">
                        {tag}
                      </Badge>
                    ))
                  }
                </Table.Cell>
                <Table.Cell>{product.stock}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>
      </Table.Root>
      </Box>
    </Card>
  )
}
