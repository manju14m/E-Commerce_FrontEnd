import axios from 'axios';

const headers = {
    "Content-Type" : 'application/json'
}

export const axiosPost = async (url,body)=> {
    let response = await axios
    .post(url,body,headers)
    .then(res => res)
    .catch(err => err.response)
    
    console.log(`reponse${response}`)
    return response; 
}

export const axiosGet = async (url,uid)=> {
    let response = await axios
    .get(url)
    .then(res => res)
    .catch(err => err.response)
    
    console.log(`reponse${response}`)
    return response; 
} 