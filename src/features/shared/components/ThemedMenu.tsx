import { CubeIcon, ExitIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";

export const ThemedMenu = () => {
  return (
    <Flex direction="column" gap="3" pt="9" align="stretch" >

        <Button size="4"> 
          <CubeIcon />
          <Text>Products</Text>
        </Button>


        <Button variant="outline" size="4">
          <LockClosedIcon />
          <Text>Orders</Text>
        </Button>



        <Button variant="outline" size="4">
          <LockClosedIcon />
          <Text>Users</Text>
        </Button>

        <Card mt="9">
          <Flex direction="column" gap="2" p="4">
            <Heading align="center">Get upgrade</Heading>
          <Text align="center">Step to the nest leve, with more features</Text>
          <Button mt="5"> Learn more</Button>
          </Flex>
        </Card>

        <Button mt="9" size="4" variant="ghost">
          <ExitIcon />
          Logout
        </Button>
    </Flex>
  )
}
