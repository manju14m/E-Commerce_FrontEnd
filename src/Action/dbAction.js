import {axiosGet} from '../apiServices/apiservises'
import {DB_URL} from '../apiServices/constants'
import axios from 'axios'

const uid = "3IxPnT0Yh3fkguaDu5M6CmfhjQS2"
var id = ""
export const get = () =>{
    
    return async (dispatch) => {
        console.log("ljl")
        axiosGet(`${DB_URL}users/${uid}.json`)
        .then(res =>{
            if(res.status === 200){
                // console.log("get")
                console.log(Object.keys(res.data))
                id = Object.keys(res.data)
                console.log(id)
                const object = Object.values(res.data)
                // console.log(object[0].filteredData)
                // console.log(object[0].totalItems)
                // console.log((res.data)
                dispatch(
                    {
                        type:"add_to_redux",
                        payload: object[0]
                    }
                )
            }
        })
    }
} 

export const put = (data) =>{
    // axiosPut(`${DB_URL}/users/${uid}/${id}/filteredData.json`,)
    // axios.put(`${DB_URL}/users/${uid}/${id}.json`,data)
}

