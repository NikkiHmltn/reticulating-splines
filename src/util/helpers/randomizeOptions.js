import {randomizedValues} from './randomizedValues'

const randomizeOptions = (houseConstraints, packLotTraits) => {
    console.log(houseConstraints, "house constraints")
    const randomizedObj = {
        rooms: 0,
        sims: 0,
        budget: 0,
        lts: 0,
        ltc: 0,
    }

        console.log("genHouseOptions", houseConstraints)
        for(const key in houseConstraints){
            let max = houseConstraints[key].max
            let min = houseConstraints[key].min
            let randomInt = Math.floor(Math.random() * (max - min) + min)
            randomizedObj[key] = randomInt
        }
        // return randomizedObj
        return randomizedValues(randomizedObj, packLotTraits)
    }
    


export {
    randomizeOptions,
}