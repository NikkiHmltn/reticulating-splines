import axios from 'axios'

const getPacks = async() => {
    const results = await axios.get(process.env.REACT_APP_API_URL + 'all-packs/')
    return results.data
}

const getTraits = async() => {
    const results = await axios.get(process.env.REACT_APP_API_URL + 'all-traits/')
    return results.data
}

export {
    getPacks,
    getTraits
}