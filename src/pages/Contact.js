import {Box, Heading, Flex, Text} from 'gestalt'
import { Link } from 'react-router-dom';

export default function Contact() {
    return(
        <Flex height="75vh" justifyContent='center'>
            <Box margin={10}>
                <Heading size="500">
                    Contact Details
                </Heading>
                <hr></hr>
                <Text>Please send any bugs, issues, requests, kind words to:</Text>
                <br></br>
                <Text><Link to="#"
                onClick={(e) => {
                    window.location.href = "mailto:snikkidoodle21@gmail.com";
                    e.preventDefault()
                }}>snikkidoodle21@gmail.com</Link></Text>
            </Box>
        </Flex>
    )
}