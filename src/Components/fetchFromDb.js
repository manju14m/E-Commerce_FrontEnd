
import {DB_URL} from '../apiServices/constants'

const uid = "3IxPnT0Yh3fkguaDu5M6CmfhjQS2"
const fetchFromDb = () =>{
    fetch(`${DB_URL}users/${uid}.json`)
    .then(res => res.json())
    .then(data => console.log(Object.values(data)))
    .catch(err => console.log(err.response))
}

export default fetchFromDb