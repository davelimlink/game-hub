import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Center, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} objectFit={"cover"} />
        <CardBody>
          <Heading fontSize="1xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
