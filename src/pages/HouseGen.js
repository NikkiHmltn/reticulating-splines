import { useEffect, useState } from 'react'
import { Heading, Box, Text, Spinner, Flex } from 'gestalt'
import usePackSwitch from '../util/state/PackContext'
import HouseGenStep1 from '../components/HouseGenStep1'
import HouseGenStep2 from '../components/HouseGenStep2'

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

    const loadingSpinner = (
        <Box height="80vh" padding={12}>
            <Flex justifyContent='center' alignContent='center'>
                <Text italic size="500">...Reticulating Splines...</Text>
            </Flex>
            <br></br>
            <br></br>
            <Spinner show={loading} accessibilityLabel="Loading Spinner"/>
            <br></br>
            <Flex justifyContent='center' alignContent='center'>
                <Text italic size="400">(This could take a second)</Text>
            </Flex>        </Box>
    )

    if (loading) return loadingSpinner
    if (!loading) {
        return(
            <>
                <Box margin={6}>
                    <Heading size="500" align='center'>
                        Select the packs you would like to include
                    </Heading>
                    <br/>
                    <Heading align='center' size='400'>
                        By default, they are all selected.
                    </Heading>
                    <br/>
                    <Text align='center'>If you would like to <b>deselect</b> an pack, simply <b>click</b> on it!</Text>
                    <Text align='center'> If it is <b>grey</b>, you have successfully deselected the pack. :)</Text>
                    <HouseGenStep1 />
                </Box>
                <Box margin={6}>
                    <Heading size="500" align='center'>
                        Let's Talk About Options!
                    </Heading>
                    <br/>
                    <Text align='center'>
                        Please put the lowest number in the <b>"Min"</b> box and the highest number in the <b>"Max"</b> box. 
                    </Text>
                    <Text align='center'>
                        The minimum number should be <b>lower</b> than the maximum number.
                    </Text>
                    <br/>
                    <Text align='center'>
                        If you don't provide any numbers, it will randomize the numbers for you.
                    </Text>
                    <br />
                    <br />
                    <HouseGenStep2 />
                </Box>
            </>
        )
    }
}