import {
  Box,
  Center,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { myPokemon } from "../Redux/actions";
import { useHistory } from "react-router-dom";

export default function MyPokemon() {
  const myPokemonData = useSelector((state) => state.myPokemon);
  let dispatch = useDispatch();
  let history = useHistory();
  const handleDelete = (id) => {
    let temp = [...myPokemonData.data];
    temp.splice(id, 1);
    const payload = {
      data: temp,
    };
    window.localStorage.setItem("my_pokemon", JSON.stringify(payload));
    dispatch(myPokemon(temp));
  };

  const handleView = (name) => {
    history.push(`/details/${name}`);
  };
  return (
    <Box>
      <Navbar />
      <Center>
        <Box p={6} w={["100%", "50%"]}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Th>name</Th>
              <Th></Th>
              <Th></Th>
            </Thead>
            <Tbody>
              {myPokemonData?.data?.length > 0 ? (
                myPokemonData?.data?.map((item, id) => (
                  <Tr key={id}>
                    <Td>{item.name}</Td>
                    <Td>
                      <Tooltip label="Delete Pokemon" aria-label="A tooltip">
                        <DeleteIcon onClick={() => handleDelete(id)} />
                      </Tooltip>
                    </Td>
                    <Td>
                      <Tooltip label="View Pokemon" aria-label="A tooltip">
                        <ArrowForwardIcon
                          onClick={() => handleView(item.name)}
                        />
                      </Tooltip>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Center p={4}>
                  <Text>No Team Member</Text>
                </Center>
              )}
            </Tbody>
          </Table>
        </Box>
      </Center>
    </Box>
  );
}
