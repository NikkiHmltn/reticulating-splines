import { useLocation } from 'react-router-dom'
import { Accordion, Box, Divider, Flex, Text, Heading, Image } from 'gestalt';
import '../common/css/houseGen.css'

export default function HouseGenResults() {
    const location = useLocation()
    // const [results, setResults] = useState({})

    let randomObj = location.state.results
    let resultsObj = {
        rooms: randomObj.randomizedObj.rooms,
        budget: randomObj.randomizedObj.budget,
        sims: randomObj.randomizedObj.sims,
        pallete: randomObj.randomizedObj.pallete,
        lts: randomObj.randomLTS,
        ltc: randomObj.randomLTC
    }

    // useEffect(() => {

    //     // console.log(location.state.results)
    // },[])



    console.log(resultsObj)


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
                PALLETE
            </Box>
            <Box margin={5} padding={1} width={'100%'}
                display='flex' justifyContent='center' 
                alignContent='center' direction='column'>
                <Box margin={2}>
                    <Heading align='center'>Lot Traits</Heading>
                </Box>
                <Flex alignItems="center" justifyContent='center' wrap gap={{ row: 1, column: 0 }}>
                    {resultsObj.lts.map((trait, idx) => {
                        return(
                            <Box key={idx} 
                                display="flex"
                                direction='column'
                                alignItems="center"
                                justifyContent="center"
                                padding={2}
                            >
                                <h4>{trait.name}</h4>
                                <Box width={75} height={80}>
                                    <Image src={trait.icon} alt={`image of ${trait.icon} icon`}
                                    naturalHeight={1}
                                    naturalWidth={1}
                                />
                                </Box>
                                <Box>
                                    <Accordion.Expandable
                                        size={"md"}
                                        padding={0}
                                        id="accordionExample - Heading expandable"
                                        items={[
                                            {
                                            children: (
                                                <Box>
                                                    <Text size="300">
                                                        <h3>
                                                            Description:
                                                        </h3> 
                                                        {trait.description}
                                                    </Text>
                                                    <Text size="300">
                                                        <h3>Effect:</h3> {trait.effect}
                                                    </Text>
                                                </Box>
                                                ),
                                            summary: ['See More'],
                                            },
                                        ]}
                                    />
                                </Box>
                            </Box>
                        )
                    })}
                </Flex>
                <Box marginTop={5}>
                    <Heading align='center'>Lot Challenges</Heading>
                </Box>
                <Flex alignItems="center" justifyContent='center' wrap gap={{ row: 1, column: 0 }}>
                {resultsObj.ltc.map((trait, idx) => {
                    return(
                        <Box key={idx} 
                        display="flex"
                        direction='column'
                        alignItems="center"
                        justifyContent="center"
                        padding={2}
                        >
                            <h4>{trait.name}</h4>
                            <Box width={75} height={80}>
                                <Image src={trait.icon} alt={`image of ${trait.icon} icon`}
                                naturalHeight={1}
                                naturalWidth={1}
                            />
                            </Box>
                            <Box>
                                <Accordion.Expandable
                                    size={"md"}
                                    padding={0}
                                    id="accordionExample - Heading expandable"
                                    items={[
                                        {
                                        children: (
                                            <Box>
                                                <Text size="300">
                                                    <h3>
                                                        Description:
                                                    </h3> 
                                                    {trait.description}
                                                </Text>
                                                <Text size="300">
                                                    <h3>Effect:</h3> {trait.effect}
                                                </Text>
                                            </Box>
                                            ),
                                        summary: ['See More'],
                                        },
                                    ]}
                                />
                            </Box>
                        </Box>
                    )
                })}
                </Flex>
            </Box>
        </Flex>
    )
}