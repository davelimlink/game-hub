import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px" marginBottom={5}>
      <Image src={logo} boxSize="60px" />
      _<ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
