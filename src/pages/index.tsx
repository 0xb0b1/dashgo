import { Flex, Button, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={380}
        bg="gray.800"
        p="8"
        borderRadius={12}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="name" type="text" label="Nome" />
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="8" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
