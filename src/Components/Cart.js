import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

function Cart({cartItems,totalItems,dispatch}){



    useEffect(()=>{
        // inputRef.current.focus();
        {document.title ="Cart"}
    },[])


    if(cartItems.length === 0){
        return(
            <div className="margintop mx-auto text-center">
                {/* { console.log("cart is empty")}  */}
                <h1>Your Bag Is Empty</h1>
                <button className="btn-primary p-1 rounded m-3">
                    <NavLink to="/home" className="nav-link text-white" >Continue Shopping</NavLink>
                </button>
            </div>
        )
        
        
    }

    const totalPrice = ()=>{

        // console.log("total")
    return cartItems.reduce((total,item)=> (Number(item.price)*Number(item.quantity)) + total,0)
    }

    // let totalItems = () =>{
    //     return  cart.reduce((total,cartItem)=> Number(cartItem.quantity)+ Number(total),0 )
    //       // console.log(cart)  
    //   }
    //   let totalItems = totalItem()

    const increase = (id) =>(
        {
            type:"Add_to_cart",
            payload:{id}
        }
    )

    const decrease = (id,quantity) =>(
        {
            type:"DECREASE",
            payload:{id,quantity}
        }
    )

    const clear = () =>(
        {
            type:"CLEAR"
        }
    )

    const remove = (id) =>(
        {
            type:"REMOVE",
            payload:{id}
        }
    )

    return(
        <div className="margintop mx-auto text-center">
           {/* {console.log(cart)} */}
           <h1>Your Bag</h1>
           <div className=" p-4">
                <h3>Subtotal ({totalItems}  {`${totalItems>1 ? "items" :  "item"}`}) : <span className="text-danger">$ {totalPrice()}</span> </h3>
                <button className="btn-primary p-1 rounded m-3">
                <NavLink to="/home" className="nav-link text-white" >Continue Shopping</NavLink>
                </button>
           </div>
           <div className="d-flex flex-column ml-3">
                {
                    cartItems.map((data,key)=>(
                        
                        <div className="d-flex my-2" key={key}> 
                            <img style={{"height":"150px","width":"150px"}} src={data.image_src} alt="cart_image" />
                            <div className="ml-3">
                                <p>{data.name}</p>
                                <p className="text-danger text-left mt-0">$ {data.price}<button className="ml-3 border p-1 btn-warning rounded" onClick={()=> {dispatch(remove(data.id))}}>Remove <i className="fa fa-trash" aria-hidden="true"></i></button></p>
                                
                                {/* <p classname=" border border-primary"><span classname="border p-2 border-primary">hi</span>5<span>+</span> </p> */}
                                <div className=" text-left">
                                    <button className="p-1 mr-2 px-2 border " onClick ={()=>{dispatch(decrease(data.id,data.quantity))}}>-</button>
                                    {data.quantity}
                                    {/* <span style={{"border":"1px","backgroundColor":"gray"}} className="bg-gray">5</span> */}
                                    <button className="p-1 ml-2 px-2 border" onClick = {()=>{dispatch(increase(data.id))}}>+</button><br/>
                                    
                                </div>
                                
                            </div> 
                        </div>
                        
                    ))
                }
                <button className="btn-danger my-4 rounded mx-auto px-3 py-2" onClick={()=>dispatch(clear())}>Clear Cart</button>
           </div>
           
       </div>
    )
}

const mapStateToProps = (state, dispatch)=>{
    // console.log(dispatch)
    return {cartItems:state.cart.cartItems,
            totalItems:state.cart.totalItems

    }
}

// const mapDispathToProps = (dispatch)=>{
//     // {console.log(dispatch)}
//     console.log(cart)
//     return{
//         increase: () => dispatch({type:"INCREASE"}),
//         decrease : ()=> dispatch({type:"DECREASE"})
//     }
// }

export default connect(mapStateToProps) (Cart);

