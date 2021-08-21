import {
  Box,
  Center,
  Grid,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { pokemonDetail } from "../Redux/actions";
import Navbar from "../Components/Navbar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function PokemonDetails({}) {
  let { name } = useParams();
  let dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemonDetails);
  useEffect(() => {
    dispatch(pokemonDetail(name));
  }, [name]);
  console.log(pokemonDetails);
  return (
    <Box>
      <Navbar />
      <Center>
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box>
            <Image
              src={pokemonDetails.sprites?.front_default}
              alt=""
              boxSize="300px"
            />
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
