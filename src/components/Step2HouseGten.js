import { useEffect } from 'react';
import M from 'materialize-css'
import '../styles/TwoHouse.css'


const Step2HouseGen = ({changeBuildSettings, nextStep}) => {


    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name == "randomize" || name == "colorpalette"){
            changeBuildSettings(name, e.target.checked)
            return;
        }
        changeBuildSettings(name, value)
    }

    useEffect(()=> {
       
    }, [])

    return(
        <div style={{width: '90%', margin: '0 auto'}}>
             <div className="step-two-intro">
                <h4 className='center-align'>Step Two: Choose Some Options</h4>
                <p>Cat ipsum dolor sit amet, kitty scratches couch bad kitty yet thinking about you i'm joking it's food always food. Scratch me there, elevator butt nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws, scratch leg; meow for can opener to feed me but knock over christmas tree purr while eating.</p>
            </div>
            <div className="divider"></div>
            <div className="options-container">
                <div>
                <div id="slider"></div>
                    <p className="range-field">
                        Lot Traits
                        <input type="range" id="test5" min="0" max="3" name='traits' onChange={handleChange} />
                    </p>
                    <p className="range-field">
                        Lot Challenges
                        <input type="range" id="test5" min="0" max="5" name='challenges' onChange={handleChange}/>
                    </p>
                    <p className="range-field">
                        Number of Sims
                        <input type="range" id="test5" min="1" max="8" name='numSims' onChange={handleChange}/>
                    </p>
                    <p className="range-field">
                        Number of Rooms
                        <input type="range" id="test5" min="0" max="8" name='numRooms' onChange={handleChange}/>
                    </p>
                    <p className="range-field">
                        Budget
                        <input type="range" id="test5" min="10000" max="99999" name='budget' onChange={handleChange}/>
                    </p>
                    <div className='checkbox-step2-container'>
                        <label>
                            <input type="checkbox"  name="colorpalette" onChange={handleChange}/>
                            <span>Color Palette</span>
                        </label>
                        <label>
                            <input type="checkbox"  name="randomize" onChange={handleChange}/>
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
                    <input name="step2" type="radio" defaultChecked/>
                    <span></span>
                </label>
            </div>
            <div className='button-container center-align'>
                <button className="btn waves-effect waves-light" type="submit" onClick={()=>nextStep(3)}>Generate House
                </button>
            </div>  
        </div>
    )
}

export default Step2HouseGen