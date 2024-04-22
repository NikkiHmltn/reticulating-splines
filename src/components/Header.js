import { Box, Flex, Link, Text} from "gestalt"


export default function Header() {

    return(
        <Box as="nav" 
            height={50}
            margin={-2}
            marginBottom={3}
            padding={2}
            width={'100%'}
            color='inverse'
            role="navigation"
        >
            <Flex
                alignItems='start'
                direction='row'
                justifyContent="around"
            >
                <Link href="/" accessibilityLabel="navigation tab for Home page">
                    <Text size="400" color="inverse">
                        Home
                    </Text>
                </Link>
                <Link href="/house-generate" accessibilityLabel="navigation tab for House Generator page">
                    <Text size="400" color="inverse">
                        House Generator
                    </Text>
                </Link>
                <Link href="/sim-generate" accessibilityLabel="navigation tab for Sim Generator page">
                    <Text size="400" color="inverse">
                        Sim Generator
                    </Text>
                </Link>
                <Link href="/donate" accessibilityLabel="navigation tab for donation page">
                    <Text size="400" color="inverse">
                        Donate
                    </Text>
                </Link>
                <Link href="/contact" accessibilityLabel="navigation tab for contact page">
                    <Text size="400" color="inverse">
                        Contact
                    </Text>
                </Link>
            </Flex>
        </Box>
    )
}