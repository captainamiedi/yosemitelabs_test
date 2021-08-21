import { Box, Center, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from "@chakra-ui/react"
import { DeleteIcon} from '@chakra-ui/icons'

export default function MyPokemon() {
    const myPokemonData = useSelector(state => state.myPokemon)
    console.log(myPokemonData, 'data');
    return (
        <Box>
            <Navbar />
                <Center>
            <Box p={6} >
            <Table variant="striped" colorScheme="teal">
                <Thead>
                    <Th>
                       name 
                    </Th>
                    <Th></Th>
                </Thead>
                <Tbody>
                    {myPokemonData?.data?.map((item, id) => (
                        <Tr key={id}>
                        <Td>{item.name}</Td>
                        <Td><DeleteIcon /></Td>
                    </Tr>
                    ))}
                    
                </Tbody>
            </Table>
            </Box>
            </Center>
        </Box>
    )
}
