import React,{useEffect}  from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {connect} from 'react-redux'
import logo from '../Img/logo.png'
// import {useSelector} from 'react'
// import $ from 'jquery'




function NavBar({totalItems,cart,dispatch}){
    // const counter = useSelector(state => state.count)

    // const totalitems = () =>{
    //     type: "Total_Items"
    // //   return  cart.reduce((total,cartItem)=> Number(cartItem.quantity)+ Number(total),0 )
    //     // console.log(cart) 
    // }

    

    const totalitems = () =>(
        {
            type:"Total_Items"
            
        }
    )

        const filter = (tag) =>(
            {
                type:"FILTER",
                payload :{tag}
                
            }
        )


    useEffect(()=>{
        // console.log("useeffect")
        dispatch(totalitems())
        // console.log("dispatched")
    },[cart])




    return(
        <div className="navbar navbar-expand-sm bg-info d-flex justify-content-around fixed-top">
           
            <div style={{"width":"30%"}} className="d-flex justify-content-around">
                
                <NavLink to="/main" className="nav-link text-white"><img src={logo} alt = "my logo" height="50px" width="50px" className = "rounded" /></NavLink>
            </div>
            <div style={{"width":"70%"}} className=" d-flex justify-content-around ">
                <NavLink to="/cart" className="nav-link  cart text-white"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span className="cartcount">{totalItems}</span></NavLink>
                <div className="dropdown">
            
                    <h6 className="dropdownbtn text-white">Filter <i className="fa fa-sort-desc" aria-hidden="true"></i></h6>
                    {/* <button className="btn btn-primary dropdown-toggle mybtn" data-toggle="dropdown" >Filter</button> */}
                    
                    <div className="dropdown-content text-center">
                        <p onClick={()=>{dispatch(filter("All"))}}>All</p>
                        <p onClick={()=>{dispatch(filter("T-shirt"))}}>T-shirt</p>
                        <p onClick={()=>{dispatch(filter("Denim"))}}>Denim</p>
                        <p onClick={()=>{dispatch(filter("shirt"))}}>shirt</p>
                        <p onClick={()=>{dispatch(filter("jacket"))}}>jacket</p>
                    </div>
                </div>
                <div className="text-white">
                <i className="fa fa-user-circle text-white ml-4" aria-hidden="true"></i><em className="text-warning" style={{"textTransform":"capitalize"}}> Hello, { localStorage.getItem("name")}</em>
                </div>
                
            </div>
        </div>
        )}


/* 
            <img src={logo} alt = "my logo" height="50px" height="50px" class = "rounded" />
            <NavLink to="/" className="nav-link text-white">Products</NavLink>
            <NavLink to="/cart" className="nav-link  cart text-white"><i className="fa fa-shopping-bag" aria-hidden="true"></i> My Bag<span className="cartcount">{totalItems}</span></NavLink> */
    /* <h5 className="align-items-center text-white">Filter{<input type="dropdown"></input>}</h5> */
    /* {console.log(count)} */

    // {/* <div className="dropdown">
        
                
    

const mapStateToProps = (state,dispatch)=>{
    return { totalItems: state.totalItems,
             cart: state.cart
    }
}

export default connect(mapStateToProps)  (NavBar);