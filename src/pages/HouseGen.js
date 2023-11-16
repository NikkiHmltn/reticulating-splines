import { useEffect, useState } from 'react'
import { Heading } from 'gestalt'
import usePackSwitch from '../util/state/PackContext'
import HouseGenStep1 from '../components/HouseGenStep1'

export default function HouseGen() {

    // POTENTIAL IDEA: INITIALIZE STATE ON THIS PAGE AS WELL AS HAVE SELECTED/DESELECTED PACKS TO CHECK FOR INIT STATE 
    // instead of displaying and selecting on this page, the actual context should be passed down to gen1/gen2 ?
const {selectedPacks, deselectedPacks, initializeState} = usePackSwitch()

const [loading, setLoading] = useState(true)


    useEffect(()=>{
        (async () => {
            if (selectedPacks <= 0 && deselectedPacks <= 0){
                await initializeState()
                setLoading(false)
            }
        })()
    }, [loading])

    if (loading) return <h1>ITS LOADING</h1>
    if (!loading) {
        return(
            <>
                <Heading size="500" align='center'>
                    SELECT WHICH SIMS PACKS YOU WOULD LIKE TO USE:
                </Heading>
                <HouseGenStep1 />
                {/* <div>
                    EXPANSIONS
                    {expansions.map((e) => {
                        return (
                            <div>
                                <h4>{e.name}</h4>
                                <img src={e.icon}/>
                            </div>
                        )
                    })}
                </div>
                <div>
                    GAME PACKS
                    {gamePacks.map((g) => {
                        return (
                            <div>
                                <h4>{g.name}</h4>
                                <img src={g.icon}/>
                            </div>
                        )
                    })}
                </div>
                <div>
                    STUFF PACKS
                    {stuffPacks.map((s) => {
                        return (
                            <div>
                                <h4>{s.name}</h4>
                                <img src={s.icon}/>
                            </div>
                        )
                    })}
                </div>
                <div>
                    KITS
                    {kits.map((k) => {
                        return (
                            <div>
                                <h4>{k.name}</h4>
                                <img src={k.icon}/>
                            </div>
                        )
                    })}
                </div> */}
                {/* THIS IS WHERE I WILL PUT THE START OF THE GENERATOR
                SO WE'RE GOING TO HAVE COMPONENTS HERE 
    
                1. USER DE-SELECTS PACKS THEY DONT WANT/OWN
                2. USER SETS OPTIONS FOR GENERATOR 
                    - # of sims in household (1-8)
                    - simolean range (10,000 - 1,000,000) OR LET THEM SET max
                    - # of rooms (studio = 0, up to 8) let them set max
                    - # lot challenges (0 - 5) rec' setting it to max 3
                    - # lot traits (0-3) */}
            </>
        )
    }

}