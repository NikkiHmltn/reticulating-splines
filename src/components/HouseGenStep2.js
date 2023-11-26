import {Box, Flex, NumberField, Heading, Checkbox} from 'gestalt'
import { useState } from 'react'

export default function HouseGenStep2() {

    const [checked, setCheck] = useState(false)


    return(
        <>
        <Flex alignItems='center' justifyContent='center' alignContent='center'>
            <Box width={'90%'}>
                <Flex alignItems='center' alignContent='center' gap={10} wrap justifyContent='evenly'>
                    <Box>
                        <Heading size='300'>Number of Rooms</Heading>
                        <NumberField name='min-rooms' label='Min' min={0} max={30} /> <NumberField name='max-rooms' min={0} max={30} label='Max' helperText='Min: 0, Max: 30'/>
                    </Box>
                    <Box>
                        <Heading size='300'>Number of Sims</Heading>
                        <NumberField  name='min-sims' label='Min' min={1} max={8}/> <NumberField name='max-sims'label='Max' min={1} max={8} helperText='Min: 1, Max: 8'/>
                    </Box>
                    <Box>
                        <Heading size='300'>Building Budget</Heading>
                        <NumberField  name='min-budget'label='Min' min={10000} max={1000000}/> <NumberField name='max-budget' label='Max' min={10000} max={1000000} helperText='Min: 10,000, Max: 1,000,000'/>
                    </Box>
                    <Box>
                        <Heading size='300'>Number of Lot Traits</Heading>
                        <NumberField name='min-lts' label='Min' min={0} max={10}/> <NumberField name='max-lts'label='Max' min={0} max={10} helperText='Min: 0, Max: 10'/>
                    </Box>
                    <Box>
                        <Heading size='300'>Number of Lot Challenges</Heading>
                        <NumberField name='min-lcs' label='Min' min={0} max={3}/> <NumberField name='max-lcs'label='Max' min={0} max={3} helperText='Min: 0, Max: 3'/>
                    </Box>
                    <Box>
                        <Heading size='300'>Number of Rooms</Heading>
                        <NumberField  label='Min' min={0} max={20}/> <NumberField label='Max' min={0} max={20} helperText='Min: 0, Max: 20'/>
                    </Box>
                </Flex>
            </Box>
        </Flex>
        <Box margin={5}>
            <Flex justifyContent="center" alignItems="center">
            <Box>
                <Checkbox checked={checked} id='checkbox' label="Would you like to generate a color palette?" helperText='Check the box for "yes"' onChange={({ checked }) => setCheck(checked)}/>
            </Box>
                <button className="custom-button" role="next button" aria-roledescription="next button" type='button' >
                    CREATE
                </button>
            </Flex>
        </Box>
        </>
    )
}