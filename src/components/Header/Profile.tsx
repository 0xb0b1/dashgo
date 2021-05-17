import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  const user = "0xb0b1";
  const email = "vcente82@gmailc.com";

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Paulo Vicente</Text>
          <Text color="gray.300" fontSize="small">
            {email}
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Paulo Vicente"
        src={`https://github.com/${user}.png`}
      />
    </Flex>
  );
}
