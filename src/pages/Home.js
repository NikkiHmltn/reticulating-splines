import { Box, Flex, Heading, Text } from "gestalt"

export default function Home() {
    return(
        <Box padding={5}>
            <Flex direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Heading size="500">
                    Welcome to Reticulating Splines!
                </Heading>
                <Text>
                    This is where I keep my sims related generators. Currently I have the house generator, which you can use as a challenge generator for your home lots. 
                </Text>
            </Flex>
        </Box>
    )
}