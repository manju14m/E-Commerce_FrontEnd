import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import {DB_URL} from '../apiServices/constants'

function Product({value,dispatch}){
    const {id,name,vendor,image_src,price,compare_at_price} = value;

    
    // console.log(cartids)

    const addToCart = ()=>{
        return {
          type:"Add_to_cart",
        payload:{id,name,price,image_src,quantity:1}  
        }
    }


        useEffect(()=>{
            
        console.log("fetch")
            // fetcher();
            fetchData()
        },[])
        


        const fetcher =  () =>{
            console.log("fetching")
            
        const body1 = {
            email : "manjum",
            password : 12345
        }
    
    fetch(`${DB_URL}user.json`,
        {
            method :"POST",
            body :JSON.stringify(body1),
            headers : {
                    "Content-Type" : 'application/json'
                }

        }
    )

    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(`db${err}`)
    })
    
        }

        const fetchData = () =>{
            fetch(`${DB_URL}user.json`)
            .then(res => res.json())
            .then(data => console.log(data))
        }
    
    


     
    return(
        <div className=" mx-auto my-3 text-center card">
                <div className=" d-flex flex-column " >
                    <img src={image_src} alt="phone" className="card-img-top" />
                    <p className=" mt-1 mb-0" style={{"height":"20px"}}>{name}</p>
                    <p className=" mb-0 mt-1"><em>({vendor})</em></p>
                </div>
                <button  className=" btn btn-primary addToBag" onClick = {()=>{dispatch(addToCart())}}> <i className="fa fa-shopping-bag" aria-hidden="true"></i> Add to Bag</button>
                    
                <div className="card-footer ">
                    {/* off percentage calculation */}
                {/* {console.log(100- parseInt(((Number(price)*100)/Number(compare_at_price))) )}  */}    
                <p className=" mb-0 text-danger"> <span style={{"color":"red" }}>${price} </span><del style={{"color":"gray"}}>${ compare_at_price} </del>{  100- parseInt(((Number(price)*100)/Number(compare_at_price)))}%OFF</p>
                </div>
        </div>
    )
}

const mapStateToProps = (state,dispatch) =>{
    // console.log(ownProps)
    return {state}
}

// const mapDispatchTOProps = ()=>{

// }

export default connect(mapStateToProps) (Product);