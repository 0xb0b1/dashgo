import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Paulo Vicente</Text>
        <Text color="gray.300" fontSize="small">
          vcente82@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Paulo Vicente"
        src="https://github.com/0xb0b1.png"
      />
    </Flex>
  );
}
