import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  /*
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>
  const [selectedPlatform, setSelectedPlatform] useState<Platform | null>
  */

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`, //The base is for mobile styling. see chakraiu for responsive style
          lg: `"nav nav" "aside main"`, //The lg: is for large devices.
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" bg="none">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={/*selectedGenre*/ gameQuery.genre}
              onSelectGenre={(genre) =>
                /*setSelectedGenre*/ setGameQuery({ ...gameQuery, genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main" bg="none">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={/*selectedPlatform*/ gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    /*setSelectedPlatform*/ setGameQuery({
                      ...gameQuery,
                      platform,
                    })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid
            gameQuery={gameQuery}
            /*selectedPlatform={gameQuery.platform}
            selectedGenre={gameQuery.genre}*/
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
