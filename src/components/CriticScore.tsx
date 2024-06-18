import { Badge, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <>
      <HStack>
        <Text fontSize="8px">Critic Score</Text>
        <Badge colorScheme={color} boxSize={6} alignContent="center">
          {score}
        </Badge>
      </HStack>
    </>
  );
};

export default CriticScore;
