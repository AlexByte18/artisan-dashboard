import { Box, Flex, Grid, Heading } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { ThemedMenu } from "./components/ThemedMenu";

interface Props {
  children?: ReactNode
}

const AuthenticatedLayout = ({ children }: Props) => {
  return (
    <Flex gap="3" width="100vw" >
      <Flex direction="column" width="20rem" p="5">
        <Flex gap="3" align="center" justify="center"  my="5">
            <img style={{
              width: "2rem",
              height: "2rem"
            }} src="./public/logo-white.png"></img>
          <Heading size="8">Artisan</Heading>
        </Flex>

        <ThemedMenu />
      </Flex>
      <Flex width="100%" direction="column" p="5">

      <Navbar />
      { children }
      </Flex>
    </Flex>
  );
}

export {
  AuthenticatedLayout as default
}