import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemon, myPokemon, searchPokemon } from '../Redux/actions'
import { Box, Center, Grid, Text } from '@chakra-ui/react'
import PokemonDetails from './PokemonDetails'
import Search from '../Components/Search'
import Pokemon from '../Components/Pokemon'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const pokemons = useSelector(state => state.AllPokemon)
    const searchResult = useSelector(state => state.searchPokemon)
    const [searchValue, setSearchValue] = useState('')
    const [teamMembers, setTeamMembers] = useState([])
    let  dispatch = useDispatch()
    let history = useHistory()
    useEffect(() => {
        dispatch(getAllPokemon())
    }, [])

    const handleSearch = (value) => {
        setSearchValue(value)
        dispatch(searchPokemon(value))
    }
    const handleViewPokemon = (name) => {
        history.push(`/details/${name}`)
    }

    const handleAddTeam =(item)=> {
        console.log(teamMembers.length, 'send in');
        if(teamMembers.length <= 5){
            setTeamMembers([...teamMembers, item])
        }
        // dispatch()
    }
    useEffect(() => {
        dispatch(myPokemon(teamMembers))
    }, [teamMembers])
    console.log(teamMembers, '=====');
    return (
        <div>
            <Navbar />
            <Center>
                <Box p={3}>
                <Text>What Pokemon are looking for?</Text>
                <Box p={2}>
                <Search setSeachValue={handleSearch} />

                </Box>
                </Box>
            </Center>
            { !searchValue && <Box p={4} px={4}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                    {pokemons?.results?.map((item, id) => (
                        <Pokemon key={id} name={item.name} url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id +
                        1}.png`} handleViewPokemon={handleViewPokemon} handleAddTeam={handleAddTeam} item={item} selected={teamMembers}/>
                    ))}
                </Grid>
            </Box>}
            {searchResult?.data && <Pokemon name={searchResult?.data?.name} url={searchResult?.data?.image}  />}
        </div>
    )
}
