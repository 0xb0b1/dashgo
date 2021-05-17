import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  useBreakpointValue,
  DrawerBody,
} from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

import { useMenu } from "../../contexts/MenuDrawerContext";

export function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  const { onClose, isOpen } = useMenu();

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={() => {}}>
        <DrawerOverlay>
          <DrawerContent color="alphaWhite" bg="gray.900" p="4">
            <DrawerCloseButton onClick={onClose} mt="6" />

            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}
