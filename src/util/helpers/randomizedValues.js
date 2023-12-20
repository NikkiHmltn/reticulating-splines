

const randomizedValues = (randomizedObj, selectedPacks) => {
     console.log(randomizedObj, 'RANDOM OBJ', selectedPacks, "selected lot traits")
     let ltcArray = selectedPacks.filter((pack) => pack.type === "LC")
     let ltsArray = selectedPacks.filter((pack) => pack.type === "LT") 
     console.log(ltcArray, ltsArray)
     let randomLTC = []
     let randomLTS = []

    // IDEA - MAYBE JUST GRAB ALL THE TRAITS DURING INITIALIZATION THEN FILTER WITH THE RANDOM PACK CHOSEN
    
   for(let i=0; i < randomizedObj.ltc; i++){
          //grab num from 0 - length
        let randomPackIdx = Math.floor(Math.random() * ltcArray.length)
          //grab random trait and push to array
        randomLTC.push(ltcArray[randomPackIdx]) 
   }


   for(let i=0; i < randomizedObj.lts; i++){
        let randomPackIdx = Math.floor(Math.random() * ltsArray.length)
        randomLTS.push(ltsArray[randomPackIdx]) 
   }
//    console.log(randomLTS, randomLTC)

   return {randomLTS, randomLTC, randomizedObj}
}

module.exports = {
     randomizedValues
}