import { useReducer } from "react";
import StartHouseGen from "../components/StartHouseGen"
import Step2HouseGen from "../components/Step2HouseGten";

const reducer = (prevState, action) => {
	switch (action.type) {
		case "addPacks":
			return { ...prevState, packs: prevState.packs.concat(action.payload) };
        case "removePacks":
			return { ...prevState, packs: prevState.packs.filter(pack => pack.name !== action.payload) };
		case "setStep":
			return { ...prevState, step: action.payload };
		default:
			return prevState;
	}
};

const initialState = {
	packs: [],
	step: 1,
};

const HouseGenerator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
	const { packs, step } = state;
    // conditionals for steps if step 1, if step 2, etc. get those radio dot things in here
    // use state for steps and implement useReducer

    const changePacks = (command, packData) => {
        if (command==="add") {
            dispatch({type: "addPacks", payload: packData})
        } else if (packs.length && command==="remove") {
            dispatch({type: "removePacks", payload: packData})
        }
    } 

    const nextStep = () => {
        dispatch({type: "setStep", payload: 2})
    }

    if (step === 1) {
        return (
            <div>
                <StartHouseGen changePacks={changePacks} nextStep={nextStep} />
            </div>
        )
    } else if (step === 2) {
        return (
            <div>
                <Step2HouseGen />
            </div>
        )
    }

    // return(
    //     <div>
    //         {/* MANDATORY - Ask for budget, Range of (sims, rooms) */}
            
    //         <div>
    //             {/* Packs div here - include all icons */}
    //         </div>
    //         <div>
    //             {/* Lot Traits here */}
    //         </div>
    //         <div>
    //             {/* Lot Challenges here */}
    //         </div>
    //         <div>
    //             {/* Color palette?????? */}
    //         </div>
    //         <div>
    //             {/* House inspo????? */}
    //         </div>
    //     </div>
    // )
}

export default HouseGenerator