import {
  Box,
  Center,
  Grid,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonDetail } from "../Redux/actions";
import Navbar from "../Components/Navbar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SpinnerComponent from "../Components/Spinner";
import { myPokemon } from "../Redux/actions";

export default function PokemonDetails({}) {
  let { name } = useParams();
  let dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  const myPokemonData = useSelector((state) => state.myPokemon);
  useEffect(() => {
    dispatch(pokemonDetail(name));
  }, [name]);

  const namesSelected = myPokemonData?.data.map((val) => val.name);

  const handleAddOrRemove = () => {
    const isSelected =
      namesSelected.indexOf(pokemonDetails?.name) !== -1 ? true : false;
    if (isSelected) {
      const index = namesSelected.indexOf(pokemonDetails?.name);
      let temp = [...myPokemonData.data];
      temp.splice(index, 1);
      const payload = {
        data: temp,
      };
      window.localStorage.setItem("my_pokemon", JSON.stringify(payload));
      dispatch(myPokemon(temp));
    } else {
      let temp = [...myPokemonData.data];
      const payload = {
        name: pokemonDetails?.name,
        url: pokemonDetails?.sprites?.front_default,
      };
      temp.push(payload);
      dispatch(myPokemon(temp));
      const payload1 = {
        data: temp,
      };
      window.localStorage.setItem("my_pokemon", JSON.stringify(payload1));
    }
  };

  // TODO
  // check if sprites image is null

  if (pokemonDetails?.loading) {
    return <SpinnerComponent />;
  }
  return (
    <Box>
      <Navbar />
      <Center>
        <SimpleGrid columns={[1, null, 2]} spacing="40px" pt={4}>
          <Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Box>
                <Image
                  src={pokemonDetails.sprites?.front_default}
                  alt=""
                  boxSize="300px"
                />
              </Box>
              <Center>
                <Button colorScheme="blue" onClick={handleAddOrRemove}>{`${
                  namesSelected.indexOf(pokemonDetails?.name) !== -1
                    ? "Remove Member"
                    : "Add to Team"
                }`}</Button>
              </Center>
            </Box>
          </Box>

          <Box>
            <Tabs>
              <TabList>
                <Tab>Abilities</Tab>
                <Tab>Moves</Tab>
                <Tab>Sprites</Tab>
                <Tab>Types</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Box>
                    <OrderedList>
                      {pokemonDetails?.abilities?.map((item, id) => (
                        <ListItem key={id}>{item?.ability?.name}</ListItem>
                      ))}
                    </OrderedList>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <OrderedList>
                      {pokemonDetails?.moves?.map((item, id) => (
                        <ListItem key={id}>{item?.move?.name}</ListItem>
                      ))}
                    </OrderedList>
                  </Box>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box>
                      <Image
                        src={pokemonDetails?.sprites?.back_default}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Image
                        src={pokemonDetails?.sprites?.back_female}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Image src={pokemonDetails?.sprites?.back_shiny} alt="" />
                    </Box>
                    <Box>
                      <Image
                        src={pokemonDetails?.sprites?.front_shiny}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Image
                        src={pokemonDetails?.sprites?.front_female}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Image
                        src={pokemonDetails?.sprites?.front_default}
                        alt=""
                      />
                    </Box>
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Box>
                    <OrderedList>
                      {pokemonDetails?.types?.map((item, id) => (
                        <ListItem key={id}>{item?.type?.name}</ListItem>
                      ))}
                    </OrderedList>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </SimpleGrid>
      </Center>
    </Box>
  );
}
