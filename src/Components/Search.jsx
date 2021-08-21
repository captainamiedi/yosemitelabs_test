import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

export default function Search({setSeachValue}) {
    return (
        <div>
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                // children={<PhoneIcon color="gray.300" />}
                />
                <Input type='text' placeholder='Search Pokemon'  onChange={(e) => setSeachValue(e.target.value)}/>
            </InputGroup>
        </div>
    )
}
