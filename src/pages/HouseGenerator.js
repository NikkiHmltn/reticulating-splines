import { useReducer } from "react";
import StartHouseGen from "../components/StartHouseGen"
import Step2HouseGen from "../components/Step2HouseGen";

const reducer = (prevState, action) => {
	switch (action.type) {
		case "addPacks":
			return { ...prevState, packs: prevState.packs.concat(action.payload) };
        case "removePacks":
			return { ...prevState, packs: prevState.packs.filter(pack => pack.name !== action.payload) };
		case "setStep":
			return { ...prevState, step: action.payload };
        case "traits": 
            return { ...prevState, traits: action.payload };
        case "challenges": 
            return { ...prevState, challenges: action.payload };
        case "budget": 
            return { ...prevState, budget: action.payload };
        case "numSims": 
            return { ...prevState, numSims: action.payload };
        case "numRooms": 
            return { ...prevState, numRooms: action.payload };
        case "randomize": 
            return { ...prevState, randomize: action.payload };
        case "colorpalette": 
            return { ...prevState, colorPalette: action.payload };
		default:
			return prevState;
	}
};

const initialState = {
	packs: [],
	step: 1,
    traits: [],
    challenges: [],
    budget: 0,
    numSims: 1,
    randomize: false,
    colorPalette: false,
    numRooms: 0
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

    const nextStep = (num) => {
        dispatch({type: "setStep", payload: num})
    }

    const changeBuildSettings = (typeOfType, payload) => {
        dispatch({type: typeOfType, payload: payload})
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
                <Step2HouseGen changeBuildSettings={changeBuildSettings} nextStep={nextStep}/>
            </div>
        )
    } else if (step === 3) {
        return (
            <div>
                <h1>Results go here</h1>
                <div className='button-container center-align'>
                    <button className="btn waves-effect waves-light" onClick={()=>nextStep(1)}> Start Over
                    </button>
                    <button className="btn waves-effect waves-light"> Give Me Another!
                    </button>
                </div>
            
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