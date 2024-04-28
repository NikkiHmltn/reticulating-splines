import { usePackSwitch } from "../../util/state/PackContext"
import { Flex, Box, Image, Text, Heading } from "gestalt"

export default function Expansions({handleIconClick}) {
    const {expansions} = usePackSwitch()

    return(
        <Box as='div' margin={5} maxWidth={500}>
            <Box padding={2}>
                <Heading size="400" align="left">Expansions</Heading>
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
                {expansions.map((e) => {
                    return(
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
                                key={e.pk}
                                overflow='normal' 
                                align='center' as='p' 
                                size="200"
                                weight="bold"
                            >
                                <span>{e.name}</span>       
                            </Text>
                            <Box 
                                width={50}
                                height={50}
                            >
                                <Image 
                                key={e.pk}
                                    alt={e.name}
                                    fit="contain"
                                    naturalHeight={1}
                                    naturalWidth={1}
                                    src={e.icon}
                                    name={e.name}
                                />                                  
                            </Box>
                        </Flex>
                    )})}
                </Flex>
            </Box>
        </Box>
    )
}