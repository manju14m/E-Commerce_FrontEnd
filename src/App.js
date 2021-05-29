import React, {useState} from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
// import '../nodem   bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import './App.css'
import ProductList from './Components/Productlist'
// import LogIn from './Components/LoginPage'
import Welcome from './Components/Welcome'
import SignIn from './Components/signIn'
import store from './Store'
import {Provider, useSelector} from 'react-redux'
import {useHistory } from 'react-router-dom'




export default function App() {
    
    const ProviderConfig = () =>{
        // const isLoggedIn = useSelector(state => state.auth.token)
        
    }
    // const history = useHistory()
    // const [state, setState] = useState(isLoggedIn)
    
    // const [state, setState] = useState(isLoggedIn)
    const token = localStorage.getItem("token")
    const isLoggedIn = token === null ? false : true

    const main = (<Route  path="/" render = {()=><div><Navbar /> <ProductList /> </div>}></Route>)
    const welc = <Route exact path="/login" component={Welcome}></Route>

    return (
        <Provider store ={store}>
                
            <Switch>
                {
                    !isLoggedIn && (
                        <Route path="/" exact>
                            <Welcome/>
                            {/* {document.title ="my app"} */}
                        </Route>
                    )
                }
                <Route path="/signin">
                    {isLoggedIn && <Redirect to="/home" />
                    
                     }
                    {!isLoggedIn && <SignIn/>}
                    {/* {document.title ="signin"} */}
                </Route>

                {/* {
                    isLoggedIn && (
                        <Route path="/home">
                            <Navbar /> 
                            <ProductList />
                        </Route>
                     )
                } */}
                <Route path="/home">
                    {isLoggedIn && <div> <Navbar /><ProductList /></div> }
                    {!isLoggedIn && <Redirect to="/signin" />}
                    {/* {document.title ="home"} */}
                </Route>
                
                <Route path="/cart">
                    {isLoggedIn && <div> <Navbar /> <Cart /></div> }
                    {!isLoggedIn && <Redirect to="/signin" />}
                </Route>
                <Route path="*">
                    <Redirect to="/"></Redirect>
                </Route>
            </Switch>


            {
                //  isLoggedIn = useSelector(state => state.auth.token)
            }
                
            {

                // token === null ? <Welcome/> : {main}
            }
            

            {/* {     token === null ? (<Route exact path="/" component={Welcome}></Route>)
                 // : history.push("/main")
                  (<Route  path="/main" render = {()=><div><Navbar /> <ProductList /> </div>}></Route>)
                  : <div><Navbar /> <ProductList /> </div>
                
               
            } */}


            {/* <Route  path="/cart" render = {()=><div><Navbar /> <Cart /> </div>}></Route> 
            {console.log(token)}   */}


        </Provider>
    )
}
