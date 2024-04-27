import {Box, Flex, NumberField, Heading} from 'gestalt'
import { useEffect, useState } from 'react'
import  { useNavigate }  from 'react-router-dom'
import { usePackSwitch } from '../util/state/PackContext.js'
import { randomizeOptions } from '../util/helpers/randomizeOptions.js'

export default function HouseGenStep2() {
    const {filterLotTraits, selectedPackLotTraits} = usePackSwitch()
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    const [errKey, setErrKey] = useState([])
    const [houseGenOpts, setHouseGenOpts] = useState({
        rooms: {min: 0, max: 30},
        sims: {min: 1, max: 8},
        budget: {min: 10000, max: 1000000},
        lts: {min: 0, max: 10},
        ltc: {min: 0, max: 3},
    })

    const defaultOptions = {
        rooms: {min: 0, max: 30},
        sims: {min: 1, max: 8},
        budget: {min: 10000, max: 1000000},
        lts: {min: 0, max: 10},
        ltc: {min: 0, max: 3},
    }

    useEffect(()=>{
        try{
            const fetchLTS = async () => {
                await filterLotTraits()
            }
            fetchLTS()
        } 
        catch(err){
            console.log(err)
        }
    }, [submitted, filterLotTraits])

    const handleChange = (e) => {
        // grabs the name after 'min-' or 'max-' ex: sims, budget, etc
        let optionName = e.event.target.name.substring(4)
        // grabs the 'min' or 'max'
        let subOptionMinMax = e.event.target.name.slice(0,3)
        // sets the min and/or max for the optionName
        setHouseGenOpts({...houseGenOpts, [optionName]: {...houseGenOpts[optionName], [subOptionMinMax]: e.value}})
    }

    const generateRandomHouseConstraints = async () =>{
        let errKeys = []
        for(const key in houseGenOpts){
            let min = houseGenOpts[key].min
            let max = houseGenOpts[key].max
            let defaultMin = defaultOptions[key].min
            let defaultMax = defaultOptions[key].max
            console.log(defaultMax, defaultMin, max, min, key)

            if(min < defaultMin || max > defaultMax || max < min || min > max){
                errKeys.push(key)
            }
        }
        if(errKeys.length !== 0) {
            console.log("in err")
            console.log(errKeys)
            setErrKey(errKeys)
        }
        localStorage.setItem("HouseConstraints", JSON.stringify(houseGenOpts))
    }

    const handleSubmit = async () => {
            setSubmitted(true)
            // save user's packs to local storage
            localStorage.setItem("UserPacks", JSON.stringify(selectedPackLotTraits))

            // if the first load and previous house results exist, remove them
            if (localStorage.getItem("firstLoad")) localStorage.removeItem("firstLoad")
            if (localStorage.getItem("HouseResults")) localStorage.removeItem("HouseResults")

            // generate new housing constraints
            await generateRandomHouseConstraints()

            // randomize all available options and set state
            let randomHouseObj = randomizeOptions(houseGenOpts, selectedPackLotTraits)
            setHouseGenOpts(defaultOptions)

            // navigate user + results to the results page
            navigate("/house-generate/results", {state:{results: randomHouseObj}})
    }

    return(
        <>
        <Flex alignItems='center' justifyContent='center' alignContent='center'>
            <Box width={'90%'}>
                <Flex alignItems='center' alignContent='center' gap={10} wrap justifyContent='evenly'>
                    <Box>
                        <Heading size='300'>Number of Rooms</Heading>
                        <NumberField name='min-rooms' 
                            errorMessage={errKey.includes("rooms") ? "Please enter a number between 0 and 30" : null} 
                            label='Min' min={0} max={30} 
                            onChange={handleChange}/> 
                        <NumberField name='max-rooms' 
                            errorMessage={errKey.includes("rooms") ? "Please enter a number between 0 and 30" : null} 
                            min={0} max={30} label='Max' 
                            helperText='Min: 0, Max: 30' 
                            onChange={handleChange}/>
                    </Box>
                    <Box>
                        <Heading size='300'>Number of Sims</Heading>
                        <NumberField  name='min-sims' label='Min' min={1} max={8}
                            errorMessage={errKey.includes('sims') ? "Please enter a number between 1 and 8" : null} 
                            onChange={handleChange}/> 
                        <NumberField name='max-sims'label='Max' min={1} max={8} 
                            helperText='Min: 1, Max: 8' 
                            errorMessage={errKey.includes('sims') ? "Please enter a number between 1 and 8" : null} 
                            onChange={handleChange}/>
                    </Box>
                    <Box>
                        <Heading size='300'>Building Budget</Heading>
                        <NumberField  name='min-budget' 
                            errorMessage={errKey.includes('budget') ? "Please enter a number between 10,000 and 1,000,000" : null} label='Min' min={10000} max={1000000} 
                            onChange={handleChange}/> 
                        <NumberField name='max-budget'  
                            errorMessage={errKey.includes("budget") ? "Please enter a number between 10,000 and 1,000,000" : null} label='Max' min={10000} max={1000000} 
                            helperText='Min: 10,000, Max: 1,000,000' 
                            onChange={handleChange}/>
                    </Box>
                    <Box>
                        <Heading size='300'>Number of Lot Traits</Heading>
                        <NumberField name='min-lts' 
                            errorMessage={errKey.includes("lts") ? "Please enter a number between 0 and 10" : null} 
                            label='Min' min={0} max={10} onChange={handleChange}/> 
                        <NumberField name='max-lts' label='Max' min={0} max={10} 
                                errorMessage={errKey.includes("lts") ? "Please enter a number between 0 and 10" : null}
                                helperText='Min: 0, Max: 10' 
                                onChange={handleChange}/>
                        </Box>
                        <Box>
                            <Heading size='300'>Number of Lot Challenges</Heading>
                            <NumberField name='min-ltc' label='Min' 
                                errorMessage={errKey.includes('ltc') ? "Please enter a number between 0 and 3" : null }
                                min={0} max={3} 
                                onChange={handleChange}/> 
                            <NumberField name='max-ltc'label='Max' 
                                errorMessage={errKey.includes('ltc') ? "Please enter a number between 0 and 3" : null } 
                                min={0} max={3} 
                                helperText='Min: 0, Max: 3' 
                                onChange={handleChange}/>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Box margin={5}>
                <Flex justifyContent="center" alignItems="center">
                    <button className="custom-button" type='button' onClick={handleSubmit}>
                        CREATE
                    </button>
                </Flex>
            </Box>
        </>
    )
}