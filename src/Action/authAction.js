import axios from 'axios'
import * as URL from '../apiServices/constants'
import {axiosPost} from '../apiServices/apiservises'
import {DB_URL} from '../apiServices/constants'
import {SIGNUP,SIGNIN} from './types'
import {useHistory } from 'react-router-dom'

// const history = useHistory()

export const signup = (body, redirectUser) => {
    // const history = useHistory()
    
    return async (dispatch,getState) => {
        axiosPost(URL.SIGNUP_URL,body)
        .then((res)=>{
            if(res.status === 200){
                localStorage.setItem("userData", res.data)
                localStorage.setItem("token", res.data.idToken)
                console.log(res.data.localId)
                dispatch({
                    type : SIGNUP,
                    payload:res.data
                })
                // redirectUser()
                // history.push("/home")
                
                // console.log("hello manju")
                // const body = {
                
                // console.log(res.data.localId})
                // const uid ="12345"
                const body = getState().cart
                // console.log(body1)
                // const body2 = {
                    // items : body1
                // }
                console.log(body)
                axiosPost(`${DB_URL}users/${res.data.localId}.json`, body)
                .then(res => {
                    if(res.status === 200){
                    // redirectUser()
                    console.log("hellp manju")
                }})
                console.log("helloppp manju")
            }
            })
            
            // // if
            // console.log(`tokenbefore ${getState().auth.token}`)
            // dispatch({
            //     type : SIGNUP,
            //     payload:res.data
            // })
            // redirectUser()
            // axiosPost(`${URL.DB_URL}users.json`,body)
            // .then(res => `reponse :${res}`)
            
            // console.log(`tokenafter ${getState().auth.token}`)
            // history.push("/main")
            // console.log(`response${res}`)   
            // console.log(`response${res.data.idToken}`)   
        
        .catch(err => console.log(err.response))
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
                dispatch({
                    type : SIGNIN,
                    payload:res.data
                })
                // history.push("/home")
                redirectUser()

            }
            // 
        })
    }
}

// AIzaSyAekcWrSP-C6lenZbHnnrvWD6lADm-X5HA


