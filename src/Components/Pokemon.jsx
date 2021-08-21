import React from 'react'
import { Box, Button, Center, Image, Text } from '@chakra-ui/react'

export default function Pokemon({name, url, handleViewPokemon, handleAddTeam, item, selected}) {
    const namesSelected  = selected.map((val) => val.name)
    return (
        <Box w='100%' borderWidth="1px" borderRadius="lg" as='button'>
            <Center>
            <Image
                boxSize="100px"
                objectFit="cover"
                src={url}
                alt={name}
                onClick={() => handleViewPokemon(name)}
            />
            <Text>{name}</Text>
            </Center>
            <Center>
            <Button colorScheme="blue" onClick={() => handleAddTeam(item)} disabled={namesSelected.indexOf(item.name) !== -1 ? true : false}>{`${namesSelected.indexOf(item.name) !== -1 ? 'Team Member' : 'Add to Team'}`}</Button>
            </Center>
        </Box>
    )
}
