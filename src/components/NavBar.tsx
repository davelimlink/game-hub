import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" marginBottom={2}>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text fontWeight={"bolder"}>Oreo Gaming</Text>
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
