import {useState, useEffect} from 'react';
import simsApi from '../util/api/axios.config.js'
import '../styles/StartHouse.css'


const StartHouseGen = () => {
    const [expansionPacks, setExpansionPacks] = useState([])
    const [gamePacks, setGamePacks] = useState([])
    const [kitPacks, setKitPacks] = useState([])
    const [stuffPacks, setStuffPacks] = useState([])


    useEffect(()=> {
        simsApi.get("/sims-packs")
        .then((res) => {
            const allPacks = res.data.data
            for(let i=0; i < allPacks.length; i++) {
                let packType = allPacks[i].type
                if (packType === 'Expansion') {
                    setExpansionPacks(expansionPacks => [...expansionPacks, allPacks[i]])
                }else if (packType === 'Game') {
                    setGamePacks(gamePacks => [...gamePacks, allPacks[i]])
                } else if (packType === 'Kit') {
                    setKitPacks(kitPacks => [...kitPacks, allPacks[i]])
                } else if (packType === 'Stuff') {
                    setStuffPacks(stuffPacks => [...stuffPacks, allPacks[i]])
                    console.log("set stuff packs hello")
                } 
            }  
        })
    }, [])

    const handleChange = (e) => {
       e.target.setAttribute('className', 'deselected')
       e.target.setAttribute("checked", 'checked')
    }

    const renderDivs = (packTypeArr) => {
        return packTypeArr.map((pack) => {
            return (
                <div key={pack._id} className={pack.type + ' pack-icon'}>                  
                    <label className="tooltip pack-icon" data-text={pack.name}>
                        <input type="checkbox" onChange={handleChange}/>
                        <img className="hoverable" src={pack.icon} alt={pack.name}/>
                    </label>
                </div>
            )
        })
    }

    return(
        <div style={{width: '90%', margin: '0 auto'}}>
            <div className="flow-text step-one-intro">
                <h4 className='center-align'>Step One: Pick the packs you want!</h4>
                <p>Cat ipsum dolor sit amet, kitty scratches couch bad kitty yet thinking about you i'm joking it's food always food. Scratch me there, elevator butt nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws, scratch leg; meow for can opener to feed me but knock over christmas tree purr while eating.</p>
            </div>
            <h4 className='center-align'>Deselect Packs</h4>
            <div className="divider"></div>
            <form>
            <div className='pack-container'>
                <div className='expansion-container z-depth-3'>
                    {renderDivs(expansionPacks)}
                </div>
                <div className='game-container z-depth-3'>
                    {renderDivs(gamePacks)}
                </div> 
                <div className='stuff-container z-depth-3'>
                    {renderDivs(stuffPacks)}
                </div>
                <div className='kit-container z-depth-3'>
                    {renderDivs(kitPacks)}
                </div>
            </div>
            </form>
            <div className='button-container center-align'>
                <button class="btn waves-effect waves-light">Next
                    <i class="material-icons right">chevron_right</i>
                </button>
            </div>  
        </div>
        
    )
}

export default StartHouseGen