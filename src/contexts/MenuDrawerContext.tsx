import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { ReactNode, useContext, createContext, useEffect } from "react";

interface MenuDrawerProviderProps {
  children: ReactNode;
}

type MenuDrawerContextData = UseDisclosureReturn;

const MenuContext = createContext({} as MenuDrawerContextData);

export function MenuProvider({ children }: MenuDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <MenuContext.Provider value={disclosure}>{children}</MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
