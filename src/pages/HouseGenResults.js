// import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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
        <>
            THIS IS WHERE THE RESULTS WILL GO. FIGURE OUT HOW TO MAKE IT LOOK NICE AND READABLE AND EASY TO SCREENSHOT

            RESULT PROPS PASSED DOWN FROM HOUSE GEN (THAT HOLDS THE TWO STEPS)
        </>
    )
}