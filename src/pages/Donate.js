import {Box, Heading, Flex} from 'gestalt'

export default function Donate() {
    return(
        <Flex alignContent='center' wrap direction="column" justifyContent='center'>
            <Heading>Thank you for your consideration!</Heading>
            <Box alignContent='center' justifyContent='center' margin={3}>
                <iframe id='kofiframe' src='https://ko-fi.com/snikkidoodle/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:'none', width:'100%', padding:'4px', background:'#f9f9f9'}} height='712' title='snikkidoodle'></iframe>
            </Box>
        </Flex>
    )
}