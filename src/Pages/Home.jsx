import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemon, myPokemon, searchPokemon } from '../Redux/actions'
import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import Search from '../Components/Search'
import Pokemon from '../Components/Pokemon'
import { useHistory } from 'react-router-dom'
import SpinnerComponent from '../Components/Spinner'

export default function Home() {
    const pokemons = useSelector(state => state.AllPokemon)
    const searchResult = useSelector(state => state.searchPokemon)
    const [searchValue, setSearchValue] = useState('')
    const [teamMembers, setTeamMembers] = useState([])
    let  dispatch = useDispatch()
    let history = useHistory()
    useEffect(() => {
        dispatch(getAllPokemon())
        const data = JSON.parse(window.localStorage.getItem('my_pokemon'))
        data && setTeamMembers(data.data)
    }, [])

    const handleSearch = (value) => {
        setSearchValue(value)
        dispatch(searchPokemon(value))
    }
    const handleViewPokemon = (name) => {
        history.push(`/details/${name}`)
    }

    const handleAddTeam =(item)=> {
        if(teamMembers.length <= 5){
            setTeamMembers([...teamMembers, item])
            const payload = {
                data: [...teamMembers, item]
            }
            window.localStorage.setItem('my_pokemon', JSON.stringify(payload))
        }
    }
    useEffect(() => {
            dispatch(myPokemon(teamMembers))
    }, [teamMembers])

    if (pokemons?.loading) {
        return <SpinnerComponent />
    }
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
            {!searchValue && <Box p={4} px={4}>
                <SimpleGrid columns={[1, null, 5]} spacing="40px">
                    {pokemons?.results?.map((item, id) => (
                        <Pokemon key={id} name={item.name} url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id +
                        1}.png`} handleViewPokemon={handleViewPokemon} handleAddTeam={handleAddTeam} item={item} selected={teamMembers}/>
                    ))}
                </SimpleGrid>
            </Box>}
            {searchResult?.data && searchValue &&  <Pokemon name={searchResult?.data?.name} url={searchResult?.data?.image}  handleViewPokemon={handleViewPokemon} handleAddTeam={handleAddTeam} item={searchResult?.data} selected={teamMembers} />}
        </div>
    )
}
