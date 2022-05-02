import {useState, useEffect} from 'react';
import simsApi from '../util/api/axios.config.js'
import '../styles/StartHouse.css'
import M from  'materialize-css'

const StartHouseGen = () => {
    // const [allPacks, setAllPacks] = useState([])
    const [expansionPacks, setExpansionPacks] = useState([])
    const [gamePacks, setGamePacks] = useState([])
    const [kitPacks, setKitPacks] = useState([])
    const [stuffPacks, setStuffPacks] = useState([])

    let elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems, {});

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
        // .then(() => {
        //     for(let i=0; i < allPacks.length; i++) {
        //         let packType = allPacks[i].type
        //         if (packType === 'Expansion') {
        //             setExpansionPacks(expansionPacks => [...expansionPacks, allPacks[i]])
        //         }else if (packType === 'Game') {
        //             setGamePacks(gamePacks => [...gamePacks, allPacks[i]])
        //         } else if (packType === 'Kit') {
        //             setKitPacks(kitPacks => [...kitPacks, allPacks[i]])
        //         } else if (packType === 'Stuff') {
        //             setStuffPacks(stuffPacks => [...stuffPacks, allPacks[i]])
        //             console.log("set stuff packs hello")
        //         } 
        //     }   
        // })
    }, [])

    // const separatePacks = () => {
    //     console.log(allPacks)
        
    // }



    
    const renderDivs = (packTypeArr) => {
        return packTypeArr.map((pack) => {
            return (
                <div className={pack.type + ' pack-icon'}>
                    <a className="tooltipped pack-icon" data-position="top" data-tooltip={pack.name}>
                        <img src={pack.icon}/>
                    </a>
                </div>
            )
        })
    }

    return(
        <div className='pack-container'>
            <div className='expansion-container'>
                {renderDivs(expansionPacks)}
            </div>
            <div className='game-container'>
                {renderDivs(gamePacks)}
            </div>
            <div className='stuff-container'>
                {renderDivs(stuffPacks)}
            </div>
            <div className='kit-container'>
                {renderDivs(kitPacks)}
            </div>
        </div>
    )
}

export default StartHouseGen