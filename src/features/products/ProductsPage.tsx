import { Avatar, Box, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { ProductsList } from "./components/ProductsList";
import { useProducts } from "./hooks/useProducts";
import AuthenticatedLayout from "../shared/AuthenticatedLayout";
import { ArchiveIcon, CubeIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons";

const ProductsPage = () => {

  const { productsQuery } = useProducts();

  if (productsQuery.isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <AuthenticatedLayout>
      <Card mt="5" mb="5">
        <Grid columns="4" gap="3">
          <Box >
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar
                  radius="full"
                  fallback={
                    <Flex width="24px" height="24px" justify="center" align="center">
                      <CubeIcon />
                    </Flex>
                  }
                />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Total products
                  </Text>
                  <Text as="div" size="4" color="gray">
                    9999
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box >
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar
                  radius="full"
                  fallback={
                    <Flex width="24px" height="24px" justify="center" align="center">
                      <PersonIcon />
                    </Flex>
                  }
                />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Clients
                  </Text>
                  <Text as="div" size="4" color="gray">
                    9999
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box >
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar
                  radius="full"
                  fallback={
                    <Flex width="24px" height="24px" justify="center" align="center">
                      <FileTextIcon />
                    </Flex>
                  }
                />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Orders
                  </Text>
                  <Text as="div" size="4" color="gray">
                    9999
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
          <Box >
            <Card size="3">
              <Flex gap="4" align="center">
                <Avatar
                  radius="full"
                  fallback={
                    <Flex width="24px" height="24px" justify="center" align="center">
                      <ArchiveIcon />
                    </Flex>
                  }
                />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Invoices
                  </Text>
                  <Text as="div" size="4" color="gray">
                    9999
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>
        </Grid>
      </Card>
      <ProductsList products={productsQuery.data ?? []} />
    </AuthenticatedLayout>
  );
}

export {
  ProductsPage as default
}