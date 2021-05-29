import axios from 'axios';

const headers = {
    "content-type" : 'application/json'
}

export const axiosPost = async (url,body)=> {

   let response = await axios
   .post(url,body,headers)
   .then(res => res)
   .catch(err => err.response)
   
   console.log(`reponse${response}`)
   return response; 
}
