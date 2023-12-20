import { useEffect } from "react"
import usePackSwitch from "../../util/state/PackContext"
import { Flex, Box, Image, Text, Heading } from "gestalt"
import '../../common/css/houseGen.css'

export default function Stuffs() {
    const {stuffPacks, selectedPacks, deselectedPacks, addSelectedPack, deselectPack} = usePackSwitch()

    const handleIconClick = async (e) => {
        let packName;

        if (e.target.tagName !== 'IMG' && e.target.tagName !== 'SPAN') {
            return console.log('ERROR NOT THE RIGHT TARGET')
        }
        if (e.target.tagName === 'IMG'){
            packName = e.target.alt
        } else {
            packName = e.target.innerText
        }

        if (selectedPacks.find(pack => pack.name === packName)){
            e.target.classList.add('deselected-pack')
            return await deselectPack(packName)
        }
        if (deselectedPacks.find(pack => pack.name === packName)){
            e.target.classList.remove('deselected-pack')
            return await addSelectedPack(packName)
        } else {
            console.log('neither fired off check for bugs you goose')
        }
    }

    useEffect(()=>{
        // console.log(selectedPacks, deselectedPacks)
    }, [selectedPacks, deselectedPacks])

    return(
        <Box as='div' margin={2} maxWidth={600}>
            <Box padding={4}>
                <Heading size="400" align="left">Stuff Packs</Heading>
            </Box>
            <Box
                paddingY={2}
                rounding={3}
                borderStyle="shadow"
            >
            <Flex 
                justifyContent="center"
                alignItems="center"
                direction="row"
                wrap
            >
            {stuffPacks.map((e) => {
                    return(
                        // <>
                            <Flex 
                                justifyContent="evenly"
                                alignItems="center"
                                direction="column"
                                wrap
                                key={e.name}
                                width={'25%'}
                                height={100}
                                onClick={(e)=> handleIconClick(e)}
                            >
                                <Text 
                                    // width={50}
                                    // overflow='normal' 
                                    align='center' as='p' 
                                    size="200"
                                    weight="bold"
                                >
                                    <span>
                                        {e.name}
                                    </span>   
                                </Text>
                                <Box key={e.pk}
                                    width={50}
                                    height={50}
                                >
                                    <Image 
                                        alt={e.name}
                                        fit="contain"
                                        naturalHeight={1}
                                        naturalWidth={1}
                                        src={e.icon}
                                    />
                                </Box>
                            </Flex>
                        // </>
                    )})}
            </Flex>
            </Box>
        </Box>
    )
}