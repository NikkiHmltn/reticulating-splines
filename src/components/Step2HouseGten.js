import { useEffect } from 'react';
import M from 'materialize-css'
import '../styles/TwoHouse.css'

const Step2HouseGen = () => {

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
            <div className="options-container">
                <div>
                    <p class="range-field">
                        Lot Traits
                        <input type="range" id="test5" min="0" max="3" />
                    </p>
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
        </div>
    )
}

export default Step2HouseGen