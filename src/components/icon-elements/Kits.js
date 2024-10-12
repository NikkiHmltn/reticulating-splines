import { usePackSwitch } from "../../util/state/PackContext"
import { Flex, Box, Image, Text, Heading, Button } from "gestalt"
import '../../common/css/houseGen.css'

export default function Kits({handleIconClick, handleBulkDeselect, handleBulkSelect}) {
    const {kits} = usePackSwitch()

    return(
        <Box as='div' margin={5} maxWidth={500}>
            <Box padding={2}>
                <Heading size="400" align="left">Kits</Heading>
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
                <Button text="Select All" onClick={(e) => handleBulkSelect(e,'K')}/>
                    <Button text="Deselect All" onClick={(e) => handleBulkDeselect(e,'K')}/>
            {kits.map((e) => {
                    return(
                        // <>
                            <Flex 
                                key={e.name}
                                justifyContent="evenly"
                                alignItems="center"
                                direction="column"
                                wrap
                                width={'25%'}
                                height={100}
                                onClick={(e)=> handleIconClick(e)}
                            >
                                <Text 
                                    // width={100}
                                    overflow='normal' 
                                    align='center' as='p' 
                                    size="200"
                                    weight="bold">
                                        <span>{e.name}</span>
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