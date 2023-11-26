import { Flex, Box } from "gestalt"
import '../common/css/houseGen.css'
import Expansions from "./icon-elements/Expansions"
import Stuffs from "./icon-elements/Stuffs"
import Games from "./icon-elements/Games"
import Kits from "./icon-elements/Kits"

export default function HouseGenStep1(props) {
    return(
        <>
            <Box 
                column={9}
                margin='auto'
            >
                <Flex 
                    justifyContent="center"
                    alignItems="baseline"
                    direction="row"
                    wrap
                >
                    <Expansions />
                    <Games />
                    <Kits />
                    <Stuffs />
                </Flex>
            </Box>
        </>
    )
}