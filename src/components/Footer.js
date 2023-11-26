import { Box, Flex, Text} from "gestalt"

export default function Footer() {
    return(
        <Box as="footer"
            height={150}
            margin={-2}
            color='inverse'
            position="absolute"
            role="footer"
            // bottom='true'
            width={'100%'}
        >
            <Flex 
                alignItems='center'
                direction="column"
                justifyContent="center"
                width={'100%'}
            >
                <Box height={50} maxWidth={200} padding={2}>
                    <Text color="inverse" size='200'>
                        © 2023 Reticulating Splines
                    </Text>
                </Box>
                <Box height={100} maxWidth={400} padding={2}>
                    <Text size='200' color="inverse">
                        We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Electronic Arts, or any of its subsidiaries or its affiliates. Trademarks are the property of their respective owners. Game content and materials copyright Electronic Arts Inc. and its licensors.
                    </Text>
                </Box>

            </Flex>
        </Box>
        // <footer>
        //     FOOTER GOES HERE. DONT FORGET TO PUT A NON-AFFLICIATION CLAUSE HERE
        // </footer>
    )
}