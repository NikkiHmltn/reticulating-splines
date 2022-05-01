import {useState, useEffect} from 'react';
import simsApi from '../util/api/axios.config.js'
import '../styles/StartHouse.css'
import M from  'materialize-css'

const StartHouseGen = () => {
    const [packs, setPacks] = useState([])
    useEffect(()=> {
        simsApi.get("/sims-packs")
        .then((res) => {
            setPacks(res.data.data)
        })

        let elems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(elems, {});

    }, [])
    console.log(packs[0])
    return(
        <div className='pack-container'>
            {packs.map((packInfo => {
                return (
                    <div className={packInfo.type + ' pack-icon'}>
                        <a className="tooltipped pack-icon" data-position="top" data-tooltip={packInfo.name}>
                            <img src={packInfo.icon}/>
                        </a>
                    </div>
                )
            }))}
        </div>
    )
}

export default StartHouseGen