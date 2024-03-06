import { useLocation } from 'react-router-dom'
import {Box, Divider, Flex, Text, Heading } from 'gestalt';
import '../common/css/houseGen.css'
import LotCards from '../components/LotCards';
import Palette from '../components/Palette'

export default function HouseGenResults() {
    const location = useLocation()
    // const [results, setResults] = useState({})

    let randomObj = location.state.results
    let resultsObj = {
        rooms: randomObj.randomizedObj.rooms,
        budget: randomObj.randomizedObj.budget,
        sims: randomObj.randomizedObj.sims,
        palette: randomObj.randomizedObj.palette,
        lts: randomObj.randomLTS,
        ltc: randomObj.randomLTC
    }

    console.log(resultsObj)
    // TODO: look into handleBeforeUnload/beforeUnload and setting to session storage

    return(
        <Flex
        justifyContent="between"
        alignItems="center"
        direction='column'
        >
            <Box alignItems={'center'} margin={5} padding={4}>
                <Text align='center'>
                    <Text italic size='600' align='center'>Sul sul!</Text>
                    <Heading align='center'>Welcome to Your New Home!</Heading>
                    <Divider />
                    <Flex 
                        direction='row'
                        justifyContent='evenly'
                    >
                    <Box>
                        <h2>Budget</h2>
                        <Text size='400' align='center'>&sect; {resultsObj.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
                    </Box>
                        <Box>
                            <h2>Rooms</h2>
                            <Text size='400' align='center'>{resultsObj.rooms}</Text>
                        </Box>
                        <Box>
                            <h2>Sims</h2>
                            <Text size='400' align='center'>{resultsObj.sims}</Text>
                        </Box>
                    </Flex>
                </Text>
            </Box>
            <br></br>
            <Box margin={5} padding={3}>
                <Text weight='bold' size="400">Palette</Text>
                <Flex 
                    direction="row"
                    alignItems="center"
                    height={200}
                    width={300}
                >
                {resultsObj.palette ? <Palette /> : "No palettes to display"}
                </Flex>
            </Box>
            <Box margin={5} padding={1} width={'100%'}
                display='flex' justifyContent='center' 
                alignContent='center' direction='column'>
                <Box margin={2}>
                    <Heading align='center'>Lot Traits</Heading>
                </Box>
                <LotCards lotTraits={resultsObj.lts}/>
                <Box marginTop={5}>
                    <Heading align='center'>Lot Challenges</Heading>
                </Box>
                <LotCards lotTraits={resultsObj.ltc}/>
            </Box>
        </Flex>
        // A refresh options button would be nice
    )
}