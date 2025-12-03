import { useForm } from '@/features/shared/hooks/useForm';
import { Box, Button, Flex, TextField } from '@radix-ui/themes'
import type { FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';
import type { LoginData } from '@/core/auth/interfaces/user';
import { useNavigate } from 'react-router';

export const LoginForm = () => {

  const {
    email,
    password,
    onChange,
    formData,
  } = useForm<LoginData>({
    email: '',
    password: ''
  })

  const { loginMutation } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    loginMutation.mutate({ ...formData }, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (error) => {
        console.log("🚀 ~ onSubmit ~ error:", error)
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="4">
          <TextField.Root
            type="text"
            placeholder='Email'
            value={email}
            name="email"
            onChange={onChange}
            size="3"
            />
          <TextField.Root
            type="password"
            placeholder='Password'
            value={password}
            name="password"
            onChange={onChange}
            size="3"
          />
          <Button 
            variant="solid" 
            type="submit"
            size="3"
          >Log in</Button>
        </Flex>
      </form>
    </Box>
  )
}
