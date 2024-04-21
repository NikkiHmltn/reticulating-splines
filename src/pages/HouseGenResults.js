import { useLocation } from 'react-router-dom'
import {Box, Divider, Flex, Text, Heading } from 'gestalt';
import '../common/css/houseGen.css'
import LotCards from '../components/LotCards';
import { useEffect, useState } from 'react';
import { randomizeOptions } from '../util/helpers/randomizeOptions.js'

export default function HouseGenResults() {
    const location = useLocation()
    let randomObj = location.state.results
    const [disabled, setDisabled] = useState(false)
    const [resultsObj, setResultsObj] = useState({
        rooms: randomObj.randomizedObj.rooms,
        budget: randomObj.randomizedObj.budget,
        sims: randomObj.randomizedObj.sims,
        lts: randomObj.randomLTS,
        ltc: randomObj.randomLTC
    })

    useEffect(()=>{
        async function init(){
            if (localStorage.getItem('firstLoad') === null) {
                await saveResults(randomObj)
                localStorage.setItem("firstLoad", 1)
            } else {
                localStorage.setItem("HouseResults", JSON.stringify(resultsObj))
            }
        }
        init()
    },[resultsObj])

    const handleRegenerate = async () => {
        setDisabled(true)
        const constraints = localStorage.getItem("HouseConstraints")
        const selectedPacks = localStorage.getItem("UserPacks")
        if(constraints && selectedPacks){
            let newResults = randomizeOptions(JSON.parse(constraints), JSON.parse(selectedPacks))
            await saveResults(newResults)
            setTimeout(() => {
                setDisabled(false)
            }, 2000)
            localStorage.setItem("HouseResults", JSON.stringify(resultsObj))
        } else {
            console.log("oops! error happened when regenerating constraints")
        }
    }

    const saveResults = async (results) => {
        setResultsObj({
            rooms: results.randomizedObj.rooms,
            budget: results.randomizedObj.budget,
            sims: results.randomizedObj.sims,
            lts: results.randomLTS,
            ltc: results.randomLTC
        })
    }

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
            <Box margin={5} padding={1} width={'80%'}
                display='flex' justifyContent='center' 
                alignContent='center' direction='column'>
                <Box margin={2}>
                    <Heading align='center' size="500">Lot Traits</Heading>
                </Box>
                <Divider/>
                {resultsObj.lts.length > 0 ? <LotCards lotTraits={resultsObj.lts}/> : <Heading align='center' size="300">No lot traits this time!</Heading> }
                <Box margin={5}>
                    <Heading align='center' size='500'>Lot Challenges</Heading>
                </Box>
                <Divider/>
                {resultsObj.ltc.length > 0 ? <LotCards lotTraits={resultsObj.ltc}/> : <Heading align='center' size='300'>No lot challenges this time!</Heading>}
                <Flex justifyContent="center" alignItems="center">
                    <button className="custom-button" role="create button" aria-roledescription="create button" type='button' disabled={disabled} onClick={handleRegenerate}>
                        Regenerate Results
                    </button>
                </Flex>        
            </Box>
        </Flex>
    )
}