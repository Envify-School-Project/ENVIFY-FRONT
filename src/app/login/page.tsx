import { Features } from '@/components/Form/Features';
import { LoginForm } from '@/components/Form/Login.form';
import { ButtonIcon } from '@/components/Button';
import { Box, Flex, Container } from '@/components/Mantine';
import { GiHexagonalNut } from 'react-icons/gi';

export default function Login() {
  return (
    <>
      <Flex align="center" className="full-vh">
        <Box
          className="y"
          sx={{
            backgroundColor: 'var(--mantine-color-dark-5)',
            borderRight: '1px solid var(--mantine-color-dark-4)',
          }}
        >
          <Box p="md">
            <ButtonIcon href={'/'}>
              <GiHexagonalNut />
            </ButtonIcon>
          </Box>
          <LoginForm />
        </Box>
        <Container size="sm">
          <Features />
        </Container>
      </Flex>
    </>
  );
}
