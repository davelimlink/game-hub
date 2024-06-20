import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" marginBottom={2}>
      <Image src={logo} boxSize="60px" />
      _<ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
