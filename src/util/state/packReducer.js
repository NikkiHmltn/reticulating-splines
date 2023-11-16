export const initialState = {
    selectedPacks: [],
    deselectedPacks: [],
    expansions: [],
    gamePacks: [],
    stuffPacks: [],
    kits: []
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
        default:
            throw new Error(`No case for type ${type} found in packReducer.`)
    }

}

export default packReducer