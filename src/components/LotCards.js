import { Accordion, Box, Flex, Text, Image } from 'gestalt';
import '../common/css/houseGen.css'

export default function LotCards(props){

    

    return(
        <Flex alignItems="center" justifyContent='center' wrap>
        {props.lotTraits.map((trait, idx) => {
            return(
                <Box key={idx} 
                display="flex"
                direction='column'
                alignItems="center"
                justifyContent="center"
                padding={2}
                >
                    <h4>{trait.name}</h4>
                    <Box width={50} height={50}>
                        <Image src={trait.icon} alt={`image of ${trait.icon} icon`}
                        naturalHeight={1}
                        naturalWidth={1}
                    />
                    </Box>
                    <Box>
                        <Accordion.Expandable
                            size={"sm"}
                            // padding={0}
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
                                summary: ['Details'],
                                },
                            ]}
                        />
                    </Box>
                </Box>
            )
        })}
        </Flex>
    )
}