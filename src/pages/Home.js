import { Box, Flex, Heading, Text } from "gestalt"

export default function Home() {
    return(
        <Flex padding={5} 
            direction="column"
            alignItems="center"
            gap={4}
            >
                <Heading size="500">
                    Welcome to Reticulating Splines!
                </Heading>
                <Text>
                    This is where I keep my sims related generators. Currently I have the house generator, which you can use as a challenge generator for your home lots. 
                </Text>
                <hr></hr>
                <Text>Please note this website is a <b>work in progress</b> and has known issues!</Text>
                <Text>See the <b>Changelog</b> below for more details or contact us to report any issues/bugs.</Text>
                <Text>Thank you!</Text>
                <hr></hr>
                <Box width={500}>
                    <Heading size="400">Changelog</Heading><Text>Version 1.0 (4.21.24)</Text>
                    <hr></hr>
                    New Features / Fixes:
                    <ul>
                        <li>Users can select/deselect chosen packs for housing generation</li>
                        <li>Housing creation has constraints, just like the real housing market</li>
                        <li>Users can read more information about lot traits</li>
                        <li>Housing results can be regenerated with the click of a button</li>
                        <li>Refreshing the results page will no longer load a previous result</li>
                    </ul>
                    Known Issues: 
                    <ul>
                        <li>Lot traits may jump up and around when opened</li>
                    </ul>
                    Future Features: 
                    <ul>
                        <li>Random sim generation to give your creative brain a rest for new sim creation</li>
                        <li>Optional additions to housing generation to increase the difficulty for a challenge</li>
                        <ul>
                            <li>World + Lot selections</li>
                            <li>Special Rooms or Items</li>
                            <li>Floor planning</li>
                        </ul>
                        <li>A challenge section for both sims and housing gameplay</li>
                        <li>A deselect all button for different pack types, because who actually owns every kit?</li>
                    </ul>
                </Box>
        </Flex>
    )
}