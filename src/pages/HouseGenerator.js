import StartHouseGen from "../components/StartHouseGen"

const HouseGenerator = () => {

    // conditionals for steps if step 1, if step 2, etc. get those radio dot things in here
    // use state for steps and implement useReducer
    return(
        <div>
            {/* MANDATORY - Ask for budget, Range of (sims, rooms) */}
            <StartHouseGen />
            <div>
                {/* Packs div here - include all icons */}
            </div>
            <div>
                {/* Lot Traits here */}
            </div>
            <div>
                {/* Lot Challenges here */}
            </div>
            <div>
                {/* Color palette?????? */}
            </div>
            <div>
                {/* House inspo????? */}
            </div>
        </div>
    )
}

export default HouseGenerator