import {createContext, useReducer, useContext} from 'react'
import { packReducer, initialState } from './packReducer'
import {getPacks, getTraits} from '../api/index'

const PackContext = createContext(initialState)

const PackProvider = ({children}) => { 
    //a provider allows all its children components to subscribe to the context's changes
    const [state, dispatch] = useReducer(packReducer, initialState)

    const filterLotTraits = async () => {
        console.log("filtering lot traits")
        dispatch({
            type: "FILTER_LOT_TRAITS", 
        })
    }

    const addSelectedPack = (packName) =>{
        let packToAdd = state.deselectedPacks.filter(pack => pack.name === packName)
        let addPackToSelectArr

        if(!packToAdd || packToAdd === -1){
            console.log('error in adding packs')
        }

        const addedPackIdx = state.deselectedPacks.findIndex(pack => pack.name === packToAdd[0].name)
        packToAdd = state.deselectedPacks.splice(addedPackIdx, 1)
        addPackToSelectArr = state.deselectedPacks.concat(packToAdd)

        dispatch({
            type: "SELECT_PACK",
            payload: {selectedPacks: addPackToSelectArr[0]}
        })

        filterLotTraits()
    }

    const deselectPack = (packName) => {
        let packToRemove = state.selectedPacks.filter(pack => pack.name === packName)
        
        if(!packToRemove || packToRemove === -1){
            console.log('error in removing pack')
        } else {
            const removedPackIdx = state.selectedPacks.findIndex(pack => pack.name === packToRemove[0].name)
            packToRemove = state.selectedPacks.splice(removedPackIdx, 1)
        }
        dispatch({
            type: "DESELECT_PACK",
            payload: {deselectedPacks: packToRemove[0]}
        })

        filterLotTraits()
    }

    const initializeState = async () => {
        const allPacks = await getPacks()
        const allTraits = await getTraits()
        const lotTraitsFiltered = await allTraits.filter((trait) => trait.type === 'LC' || trait.type === 'LT')
        dispatch({
            type: "SET_INIT_PACK_STATE",
            payload: {packs: allPacks, traits: lotTraitsFiltered}
        })
        
    }

    const value = {
        selectedPacks: state.selectedPacks,
        deselectedPacks: state.deselectedPacks,
        kits: state.kits,
        expansions: state.expansions,
        gamePacks: state.gamePacks,
        stuffPacks: state.stuffPacks,
        selectedPackLotTraits: state.selectedPackLotTraits,
        deselectPack,
        addSelectedPack,
        initializeState,
        filterLotTraits,
    }

    //context always needs a "value" prop and "children" refers to the children components (will wrap this context around whole app)
    return <PackContext.Provider value={value}>{children}</PackContext.Provider>
}

const usePackSwitch = () => {
    const context = useContext(PackContext)

    if(context===undefined) throw new Error("usePackSwitch must be used within PackContext")

    return context
}

export {
    usePackSwitch,
    PackProvider
}