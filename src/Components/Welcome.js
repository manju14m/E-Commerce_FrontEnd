import React, {useRef, useEffect} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import logo from '../Img/logo.png'
import SignUp from './signIn'

function Welcome({dispatch}){


    const updateuser = (e)=>{
        e.preventDefault();
        // var  user = inputRef.current.value
        
        // localStorage.setItem("name",user)
        // return {
        //         type:"UPDATE_USER",
        //         payload: {user}
        //         }
       
    }

    useEffect(()=>{
        // inputRef.current.focus();
        {document.title ="my app"}
    },[])



    return(
        <div className=" welcome-root">
            <div className= "welcome_navbar d-flex justify-content-end ">
                   <NavLink className="welcome_navlink" to="/signin">Signin
                   <i className="fa fa-user-circle text-white ml-4" aria-hidden="true"></i>
                   </NavLink> 
            </div>
            <div className="d-flex flex-column justify-content-center align-item-center welcome">
            <img src={logo} height="200px" width="200px" alt="logo" className="rounded mb-5"  />
                
                <h2>Welcome !</h2>
                
                {/* <SignUp /> */}
                
            </div>
            {/* <h2>Welcome to Shopify</h2>
            <form className="mx-4 py-3 "  > 
                <div className="form-group ">
                    <input type="text" id="mytext" className="form-control" maxLength="10"  placeholder="Enter Your Name..." />
                </div>
                <button className="btn btn-primary"  onClick={(e)=>{dispatch(updateuser(e))}}>Enter</button>
            </form> */}
                
        </div>
    )
}

const mapStateToProps = (state,dispatch) =>{
    return{
        state
    }
    
}

export default connect(mapStateToProps) (Welcome);