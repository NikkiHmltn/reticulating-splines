import { Flex, Box, Text } from "gestalt"
import { useEffect, useState } from "react"

const Palette = ()=>{
    const [colors, setColors] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // console.log("running color useeffect")
        try{
            // debugger
            const getColors = async ()=>{
                // console.log("before fetch")
                let resp = await fetch("https://www.colr.org/json/schemes/random/1?scheme_size_limit=5", {cache: "no-cache"})
                let randomPal = await resp.json()
                // console.log(randomPal)
                if(randomPal.schemes.length === 0) {
                    // console.log("no color scheme")
                    getColors()
                }else {
                // let colorArr = randomPal.schemes[0].colors
                // console.log(colorArr)
                // console.log(randomPal.schemes[0])
                setColors(randomPal.schemes[0].colors)
                setLoading(false)
                }
            }
            getColors()
        }catch(err){
            setLoading(true)
            console.log(err.message)
        }
    }, [])

    if(loading){
        return(
            <h1> LOADING </h1>
        )
    } else {
        return(
            <Flex direction="row" justifyContent="center" alignItems="center">
                {colors.map((color, idx) => {
                    return(
                        <Box key={idx}>
                            <div className="palette-color" style={{backgroundColor: `#${color}`}}></div>
                            <br></br>
                            <Text align="center" size="400" weight="bold">#{color}</Text>
                        </Box>
                    )
                })}
            </Flex>
        )
    }
}

export default Palette