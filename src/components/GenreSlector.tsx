import {
  HStack,
  Image,
  Spinner,
  Button,
  MenuItem,
  MenuButton,
  Menu,
  MenuList,
  List,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreSelector = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Menu>
        <MenuButton
          backgroundColor={selectedGenre?.id ? "red" : ""}
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          {selectedGenre?.name || "Genre"}
        </MenuButton>
        <MenuList>
          {data.map((genre) => (
            <MenuItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  //variant={"link"}
                  background="none"
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontSize="sm"
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={genre.id === selectedGenre?.id ? "bolder" : ""}
                  backgroundColor={genre.id === selectedGenre?.id ? "red" : ""}
                >
                  {genre.name}
                </Button>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default GenreSelector;
