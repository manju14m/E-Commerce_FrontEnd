import axios from 'axios'
import * as URL from '../apiServices/constants'
import {axiosPost} from '../apiServices/apiservises'
import {SIGNUP,SIGNIN} from './types'
import {useHistory } from 'react-router-dom'

// const history = useHistory()

export const signup = (body, redirectUser) => {
    // const history = useHistory()
    
    return async (dispatch,getState) => {
        axiosPost(URL.SIGNUP_URL,body)
        .then((res)=>{
            // // if
            console.log(`tokenbefore ${getState().auth.token}`)
            dispatch({
                type : SIGNUP,
                payload:res.data
            })
            redirectUser()
            console.log(`tokenafter ${getState().auth.token}`)
            // history.push("/main")
            // console.log(`response${res}`)   
            // console.log(`response${res.data.idToken}`)   
        })
    }
}

export const signin = (body, redirectUser) => {
    // const history = useHistory()
    return async (dispatch,getState) => {
        axiosPost(URL.LOGIN_URL,body)
        .then((res)=>{

            // console.log(`response${res}`)   
            // console.log(`response${res.data.idToken}`) 

            if(res.status === 200){
                localStorage.setItem("userData", res.data)
                localStorage.setItem("token", res.data.idToken)
                // console.log(localStorage.getItem("token"))
                // dispatch({
                //     type : SIGNIN
                // })
                // history.push("/home")
                redirectUser()

            }
            // 
        })
    }
}

// AIzaSyAekcWrSP-C6lenZbHnnrvWD6lADm-X5HA


