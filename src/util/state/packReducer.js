export const initialState = {
    selectedPacks: [],
    deselectedPacks: [],
    expansions: [],
    gamePacks: [],
    stuffPacks: [],
    kits: [],
    lotTraits: [],
    selectedPackLotTraits: [],
}

const packReducer = (state, action) =>{
    const {type, payload} = action
    switch(type){
        case "SET_INIT_PACK_STATE":
            return {
                ...state, 
                selectedPacks: payload.packs,
                expansions: payload.packs.filter((pack) => pack.type === 'E'),
                gamePacks: payload.packs.filter((pack) => pack.type === 'G'),
                stuffPacks: payload.packs.filter((pack) => pack.type === 'S'),
                kits: payload.packs.filter((pack) => pack.type === 'K'),
                lotTraits: payload.traits,
            }
        case "SELECT_PACK":
            console.log("SELECT_PACK", payload)
            return {
                ...state,
                selectedPacks: [...state.selectedPacks, payload.selectedPacks,]
            }
        case "DESELECT_PACK":
            return {
                ...state,
                deselectedPacks: [...state.deselectedPacks, payload.deselectedPacks,]
            }
        case "FILTER_LOT_TRAITS":
            let selectedPackLotTraits = []; 
            // loop through all selectedPacks
            for(let i=0; i < state.selectedPacks.length; i++){
                // current pack in loop
                let currPack = state.selectedPacks[i]
                // for(let i = 0 ; i < state.lotTraits.length; i++){
                    let foundTraitPack = state.lotTraits.filter(({pack}) => {
                        // console.log(pack); 
                        return pack === currPack.pk;
                    })
                    if(foundTraitPack.length > 0) {
                        selectedPackLotTraits.push(foundTraitPack)
                    }
                    
                    // for(let key in state.lotTraits[i]){
                    //     if (state.lotTraits[i][key] === currPack.pk){
                    //         selectedPackLotTraits.push(state.lotTraits[i])
                    //     }
                    // }
            }
            // selectedPackLotTraits.flat()
            let filteredPacks = []
            for(let obj in state.selectedPacks){
                let currPackPK = state.selectedPacks[obj].pk

                filteredPacks.push(selectedPackLotTraits.filter((pack) => {
                    if(pack[0].pack === currPackPK){
                        return pack
                    }
                }))
            }
                // console.log(filteredPacks.flat().flat())
            
            return{
                ...state,
                //the one array should now be the entire state of only selected packs that contain lot traits (LC and LT)
                selectedPackLotTraits: selectedPackLotTraits.flat().flat()
            }
        default:
            throw new Error(`No case for type ${type} found in packReducer.`)
    }

}

export default packReducer