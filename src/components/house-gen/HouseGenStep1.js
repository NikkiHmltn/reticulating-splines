import { Flex, Box } from "gestalt"
import '../../common/css/houseGen.css'
import { usePackSwitch } from "../../util/state/PackContext"
import Expansions from "../icon-elements/Expansions"
import Stuffs from "../icon-elements/Stuffs"
import Games from "../icon-elements/Games"
import Kits from "../icon-elements/Kits"

export default function HouseGenStep1() {
    const {selectedPacks, deselectedPacks, addSelectedPack, deselectPack} = usePackSwitch()

    const handleIconClick = async (e) => {
        let packName;

        if (e.target.tagName !== 'IMG' && e.target.tagName !== 'SPAN') {
            return console.log('ERROR NOT THE RIGHT TARGET')
        }
        if (e.target.tagName === 'IMG'){
            packName = e.target.alt
        } else {
            packName = e.target.innerText
        }

        if (selectedPacks.find(pack => pack.name === packName)){
            e.target.classList.add('deselected-pack')
            return await deselectPack(packName)
        }
        if (deselectedPacks.find(pack => pack.name === packName)){
            e.target.classList.remove('deselected-pack')
            return await addSelectedPack(packName)
        } else {
            console.log('neither fired off check for bugs you goose')
        }
    }

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
                    {/* IDEA: buttons for each pack type to "deselect all" */}
                    <Expansions handleIconClick={handleIconClick}/>
                    <Games handleIconClick={handleIconClick}/>
                    <Kits handleIconClick={handleIconClick}/>
                    <Stuffs handleIconClick={handleIconClick}/>
                </Flex>
            </Box>
        </>
    )
}