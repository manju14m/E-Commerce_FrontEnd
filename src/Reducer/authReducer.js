import {SIGNIN, SIGNOUT,SIGNUP} from '.././Action/types'

const initialState = {
    token : localStorage.getItem("token"),
    userData :localStorage.getItem("userData")
}

export default function authReducer(state = initialState,action){
    switch(action.type){
        case "SIGNIN" : 
        return{
            ...state,
            token : action.payload.idToken,
            userData : action.payload
        }
        case "SIGNUP" :
            // console.log(`signup${action.payload.idToken}`)
            return{
                ...state,
                token : action.payload.idToken,
                userData : action.payload
            }
        
        // case "SIGNOUT" :
            
        
        default:
            return state;
    }

}