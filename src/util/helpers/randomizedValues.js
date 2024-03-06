

const randomizedValues = (randomizedObj, selectedPacks) => {
     console.log(randomizedObj, 'RANDOM OBJ', selectedPacks, "selected lot traits")
     let ltcArray = selectedPacks.filter((pack) => pack.type === "LC")
     let ltsArray = selectedPacks.filter((pack) => pack.type === "LT") 
     console.log(ltcArray, ltsArray)
     let randomLTC = new Set()
     let randomLTS = new Set()

    // IDEA - MAYBE JUST GRAB ALL THE TRAITS DURING INITIALIZATION THEN FILTER WITH THE RANDOM PACK CHOSEN
    
   for(let i=0; i < randomizedObj.ltc; i++){
          //grab num from 0 - length
        let randomPackIdx = Math.floor(Math.random() * (ltcArray.length - 0) + 0)
          let newTrait = ltcArray[randomPackIdx]
        if(randomLTC.size === 0){
          randomLTC.add(newTrait)
        } else {
          while(randomLTC.has(newTrait)){
               randomPackIdx = Math.floor(Math.random() * (ltcArray.length - 0) + 0)
               newTrait = ltcArray[randomPackIdx]
          }
          randomLTC.add(newTrait)
        }


        }
          //grab random trait and push to array
   


   for(let i=0; i < randomizedObj.lts; i++){
        let randomPackIdx = Math.floor(Math.random() * (ltsArray.length - 0) + 0)
        let newTrait = ltsArray[randomPackIdx]

        if(randomLTS.size === 0){
          randomLTS.add(newTrait)
        } else {
          while(randomLTS.has(newTrait)){
               randomPackIdx = Math.floor(Math.random() * (ltsArray.length - 0) + 0)
               newTrait = ltsArray[randomPackIdx]
          }
          randomLTS.add(newTrait)
        }
     }      
//    console.log(randomLTS, randomLTC)
     randomLTC = Array.from(randomLTC)
     randomLTS = Array.from(randomLTS)

   return {randomLTS, randomLTC, randomizedObj}
}

module.exports = {
     randomizedValues
}