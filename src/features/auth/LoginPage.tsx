import PublicLayout from '../shared/PublicLayout'
import { Flex, Heading, Text } from '@radix-ui/themes'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
  return (
    <PublicLayout>
      <Flex height="100vh" style={{
					backgroundImage: 'url(../public/main-bg.jpeg)',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
				}}>
        <Flex width="35vw" height="100%" p="9" direction="column" justify="center">
          <Flex gap="3" align="center" mb="5">
            <img style={{
              width: "4.5rem",
              height: "4.5rem"
            }} src="./public/logo-white.png"></img>
          <Heading size="9">Artisan</Heading>
          </Flex>
          <Text mb="5">Welcome back! Log in to access your dashboard and unlock the full potential of your workspace.</Text>
          <LoginForm/>

          {/* <Text mt="5">Already have and account? Sign in</Text> */}

        </Flex>
        <Flex width="75vw" justify="center" align="center" >
          <img src="../public/maceta.png" style={{
					display: "flex",
					objectFit: "cover",
					width: "35%",
					height: "auto",
				}} />
        </Flex>
      </Flex>
    </PublicLayout>
  )
}
