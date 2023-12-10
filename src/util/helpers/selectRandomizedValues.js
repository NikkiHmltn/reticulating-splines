export default function selectRandomizedValues(randomizedObj, selectedPacks) {

   let chosenLTC = []
   let chosenLTS = [] 
    // TODO - AXIOS SOMEWHERE THE SELECTED PACKS THAT HAVE TRAITS SO THE ARRAYS HOLD JUST THE TRAITS
    // IDEA - MAYBE JUST GRAB ALL THE TRAITS DURING INITIALIZATION THEN FILTER WITH THE RANDOM PACK CHOSEN
    
   for(let i=0; i < randomizedObj.ltc; i++){
        let randomPackIdx = Math.floor(Math.random() * selectedPacks.length)
        chosenLTC.push(selectedPacks[randomPackIdx]) 
   }


   for(let i=0; i < randomizedObj.lts; i++){
        let randomPackIdx = Math.floor(Math.random() * selectedPacks.length)
        chosenLTS.push(selectedPacks[randomPackIdx]) 
   }





   console.log(chosenLTC, chosenLTS)
}