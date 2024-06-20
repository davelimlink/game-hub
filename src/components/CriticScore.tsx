import { Badge, HStack } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <>
      <HStack>
        <Badge colorScheme={color} boxSize={6} alignContent="center">
          {score}
        </Badge>
      </HStack>
    </>
  );
};

export default CriticScore;
