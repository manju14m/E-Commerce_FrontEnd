import React, {useRef, useEffect, useState} from 'react'
import * as authAction from '../Action/authAction'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {useHistory } from 'react-router-dom'


export default function SignIn() {

    const history = useHistory()
    const [login, setLogin] = useState(true)
    const [state, setState] = useState(
        {
            emailId:"",
            password:""
        }
    )
        const dispatch = useDispatch()
    const handleChange = (event) =>{
        setState({...state,
             [event.target.name]: event.target.value })

             
    }
     
    const toggleSignup = (event)=>{
        event.preventDefault();
        setLogin(!login)
        setState({
            emailId:"",
            password:""
        })
    }


    const loginHandler = (event) => {
        const body = {
            email : state.emailId,
            password : state.password,
            returnSecureToken: true
        }
        event.preventDefault();
        
        // console.log(`history${history}`)
        if(state.emailId.length === 0){
            alert("Email can't be empty")
            return;
        }
        else if(state.password.length === 0){
            alert("Password can't be empty")
            return;
        }

        
        // dispatch(authAction.login(body))
        const redirectUser = () =>{
            window.location.reload(false)
            // history.push("/home")
        }

        login ? dispatch(authAction.signin(body,redirectUser)) : dispatch(authAction.signup(body, redirectUser))
            // history.push("/home")













            // window.location.reload()
        
        // const headers = {
        //     "Content-Type" : 'application/json'
        // }
        // const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAekcWrSP-C6lenZbHnnrvWD6lADm-X5HA"
        // axios.post(url,body,headers)
        // .then(res => {
        //     console.log(res);
        //     console.log("success")
        //   })
        //   .catch(err =>{
        //     //   console.log(alert("123"))
        //       console.log(err.response)
        //   })

        // fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAekcWrSP-C6lenZbHnnrvWD6lADm-X5HA",
        //     {
        //         method : "POST",
        //         body : JSON.stringify({
        //             email : state.emailId,
        //             password : state.password,
        //             returnSecureToken: true
        //         }),
        //         headers : {
        //             'Content-Type' : 'application/json'
        //         }
        //     }
        //     ).then(res => {
        //         if(res.ok){
        //             return res.json()
        //         }
        //         else{
        //            return  res.json().then(data =>{
        //                 console.log(data)

        //             throw new Error("hello")   
        //             })
        //         }
        //         }).then(data => console.log(data))
        //     .catch(err => alert("error"))


        setState({
            emailId:"",
            password:""
        })
        // console.log(state.username)
    }

    const inputRef = useRef();

    useEffect(()=>{
        // inputRef.current.focus();
        {document.title ="signin"}
    },[])

    return (
        <div style={{"backgroundColor" : "#88946f","height":"100vh"}} className="d-flex flex-column  justify-content-center">
            
        <div className="form-holder welcome">
            <div className="text-center">
               <h3>{` ${ login ? "Login" : "Signup" }` }</h3> 
               {console.log(login)}
            </div>
            <form >
                <div className="form-group">
                    <label htmlFor="email">Email:<span> *</span>
                    <input type="text"
                    //  ref={inputRef} 
                     name="emailId" 
                     placeholder="Enter Email..." 
                     className="form-control"
                     onChange = {handleChange} 
                     value = {state.emailId}
                     required/>
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Password: <span> *</span>
                    <input type="password" 
                    name="password" 
                    placeholder="Enter Password..." 
                    className="form-control" 
                    onChange = {handleChange}
                    value = {state.password}
                    required />
                    </label>
                    {/* <input type="text" name="password" placeholder= "Please Enter Password..." clasName ="form-control" /> */}
                </div>
                <div className="form-group text-center">
                    <button className="btn btn-primary" onClick={loginHandler}>{` ${ login ? "Login" : "Signup" }` }</button>
                </div>
                <div className="form-group text-center">
                    <button className="btn btn-secondary" onClick={toggleSignup}>{` ${ login ? "Create An Account" : " switch to Login" }` }</button>
                </div>
            </form>
        </div>
        </div>
    )
}
