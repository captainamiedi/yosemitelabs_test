import React from 'react'
import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'

export default function Navbar() {
    return (
            <Box bg="blue" w="100%" p={6} color="white"> 
                <Flex>
                    <Box p={2}>
                        <Link to='/'>
                        
                        <Heading size='md'>Pokemon</Heading>
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to='/my_pokemon'>
                        <Button colorScheme="teal" variant="outline">
                            <Text color='white'>My Pokemon</Text>
                        </Button>

                        </Link>
                    </Box>
                </Flex>
            </Box>
    )
}
