import selectRandomizedValues from './selectRandomizedValues'

export default function randomizeOptions(houseGenOpts, selectedPacks) {
    let randomizedOptionsObj = {
        rooms: 0,
        sims: 0,
        budget: 0,
        lts: 0,
        ltc: 0
    }

    for(const key in houseGenOpts){
        if(key === 'pallete') {
            randomizedOptionsObj.pallete = houseGenOpts.pallete.checked; 
            break;
        }
        let max = houseGenOpts[key].max
        let min = houseGenOpts[key].min
        let randomInt = Math.floor(Math.random() * (max - min) + 1) + min
        randomizedOptionsObj = {...randomizedOptionsObj, [key]: randomInt}
    }
    
    selectRandomizedValues(randomizedOptionsObj, selectedPacks)
}