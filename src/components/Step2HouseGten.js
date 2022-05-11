import { useEffect } from 'react';
import M from 'materialize-css'
import '../styles/TwoHouse.css'

const Step2HouseGen = () => {


    const handleSubmit = (e) => {
        // change this to onChange => handle change
        // get some conditionals to set state
    }

    useEffect(()=> {
        let ranges = document.querySelectorAll("input[type=range]");
        M.Range.init(ranges);
      }, [])

    return(
        <div style={{width: '90%', margin: '0 auto'}}>
             <div className="flow-text step-two-intro">
                <h4 className='center-align'>Step Two: Choose Some Options</h4>
                <p>Cat ipsum dolor sit amet, kitty scratches couch bad kitty yet thinking about you i'm joking it's food always food. Scratch me there, elevator butt nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws, scratch leg; meow for can opener to feed me but knock over christmas tree purr while eating.</p>
            </div>
            <div className="divider"></div>
            <form>
                <div className="options-container">
                    <div>
                        <p class="range-field">
                            Lot Traits
                            <input type="range" id="test5" min="0" max="3" name='traits' />
                        </p>
                        <p class="range-field">
                            Lot Challenges
                            <input type="range" id="test5" min="0" max="5" name='challenges' />
                        </p>
                        <p class="range-field">
                            Number of Sims
                            <input type="range" id="test5" min="1" max="8" name='numSims' />
                        </p>
                        <p class="range-field">
                            Number of Rooms
                            <input type="range" id="test5" min="0" max="8" name='numRooms' />
                        </p>
                        <p class="range-field">
                            Budget
                            <input type="range" id="test5" min="10000" max="100000" name='budget' />
                        </p>
                        <div className='checkbox-step2-container'>
                            <label>
                                <input type="checkbox" value="colorpalette" name="colorpalette" />
                                <span>Color Palette</span>
                            </label>
                            <label>
                                <input type="checkbox" value="randomize" name="randomize" />
                                <span>Randomize All</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='radio-container'>
                    <label>
                        <input name="step1" type="radio" disabled="disabled" />
                        <span></span>
                    </label>
                    <label>
                        <input name="step2" type="radio" checked/>
                        <span></span>
                    </label>
                </div>
                <div className='button-container center-align'>
                    <button className="btn waves-effect waves-light" type="submit" onSubmit={handleSubmit}>Generate House
                    </button>
                </div>  
            </form>
        </div>
    )
}

export default Step2HouseGen