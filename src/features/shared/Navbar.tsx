import { useAuthStore } from "@/core/auth/store/useAuthStore"
import { Avatar, Box, Text, Flex, Heading  } from "@radix-ui/themes"



export const Navbar = () => {

  const { user, logout } = useAuthStore();
  return (
    <Flex p="3">
      <Flex width="50%">
        <Heading size="3">Welcome back!</Heading>
      </Flex>
      <Flex width="50%" justify="end" gap="2">
        <Flex gap="3" align="center">
			<Avatar
				size="3"
				src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
				radius="full"
				fallback="T"
			/>
			<Box>
				<Text as="div" size="2" weight="bold">
					{ user?.fullName }
				</Text>
				<Text as="div" size="2" color="gray">
					Sales Admin
				</Text>
			</Box>
		</Flex>
        {/* <NavLink to="/">
          <Button >
            Home
          </Button>
        </NavLink>
        <NavLink to="/products/new">
          <Button >
            Agregar nuevo producto
          </Button>
        </NavLink>
         <Button onClick={logout} >
            Logout
            <ExitIcon />
          </Button> */}


      </Flex>
      
    </Flex>
  )
}
