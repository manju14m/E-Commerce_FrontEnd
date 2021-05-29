import Products from '../Data/ProductData'




const initialState={
    cart : [], 
    totalItems :0,
    filteredData : Products
    // user : "Guest"
}

export default function cartReducer(state = initialState,action){
    // let arr = []
    switch(action.type){
        case "Add_to_cart":

        let temparr = state.cart.map(item => item.id)
            // console.log(`temparr ${temparr}`)

        if (temparr.includes(action.payload.id)){
            // console.log("item present")
            let Temp = state.cart.map((item)=>{
                if(item.id === action.payload.id){
                    item = {...item, quantity:Number(item.quantity)+1}
                }
                return item;
            }) 
            return{...state,cart:Temp}
        }    
        else{
            // console.log("not present")
            // console.log(action.payload.id)
            let temp=  {...state , cart: [...state.cart,action.payload]}
            // console.log(temp.cart)
            // console.log(temp.cart)
            let ids = temp.cart.map(o => o.id)
                // console.log(ids)
            let filtered = temp.cart.filter(({id}, index) => !ids.includes(id, index + 1))  
            // console.log(filtered)  
    
                // return temp
                return {...state,cart:filtered} 
        }
           




        //   let temp =  {...state, cart:[...state.cart,action.payload] }


        //    let Temp = state.cart.map((item)=>{
        //         if(item.id === action.payload.id){
        //             item = {...item, quantity:Number(item.quantity)+1}
        //             // console.log(item.id)
        //         }
                
        //         // return {...state , cart: [...state.cart,action.payload]}
        //         return item;
        //     }) 


        //     let ids = Temp.map(o => o.id)
        //     console.log(ids)
        //     let filtered = Temp.filter(({id}, index) => !ids.includes(id, index + 1))

        //     return {...state,cart:filtered} 




            // let ids = arr.map(o => o.id)
            // console.log(ids)
            // let filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))






            // return {...state, cart:[...state.cart,action.payload] };

            // let Temp = state.cart.map((item)=>{
            //     if(item.id === action.payload.id){
            //         item = {...item, quantity:Number(item.quantity)+1}
            //         // console.log(item.id)
            //     }
            //     // else{
            //     //    return action.payload
            //     // }
            //     // console.log(item)
            //     // // return {...state , cart: [...state.cart,action.payload]}
            //     return item;
            // }) 

            // // return {...state,cart:Temp}

            // // console.log(temp)



            // return {...state , cart: [...state.cart,action.payload]}
            
        



            // console.log("adding to cart")
            // for(let i=0; i<=state.cart.length; i++){
            //     console.log(i)
            // }
            // // if(action.payload.id in state.cart.id){

            // }
            
            // if(action.payload.id ===1){
            //     console.log(arr)
            // }

            // if (state.cart.length === 0){
            //     console.log(state.cart.length)
            //     console.log(state.cart)
            //     return {...state, cart:[...state.cart,action.payload] };
                
            // }

            // else{
            //     arr = [1,2,3,4]
            //     return {...state, cart:[...state.cart,action.payload] };
            // }
                
            // state.cart.map((item)=>{
            //     if(item.id === action.payload.id){
            //         console.log("item present")
                
                
            // })
            


            
            
        case "INCREASE":
            // console.log("increasing :" + action.payload.id)
            let TempIncreaseCart = state.cart.map((item)=>{
                if(item.id === action.payload.id){
                    item = {...item, quantity:Number(item.quantity)+1}
                }
                return item;
            }) 
            return{...state,cart:TempIncreaseCart}
            
        case "DECREASE":
            let TempDecreaseCart = state.cart.map((item)=>{
                if(item.id === action.payload.id && item.quantity !==1){
                    item = {...item, quantity:Number(item.quantity)-1}
                }
                return item;
            }) 
            return{...state,cart:TempDecreaseCart}


            // let TempDecreaseCart = [];
            // if(action.payload.quantity === 1 ){
            //     TempDecreaseCart =  state.cart.filter((item)=> item.id !== action.payload.id );
            // // console.log("its one")
            // console.log(TempDecreaseCart)
            // }
            // else{
            //      TempDecreaseCart = state.cart.map((item)=>{
            //         if(item.id === action.payload.id){
            //             item = {...item, quantity:Number(item.quantity)-1}
                    
            //         }

            //         return item;
            //     })
            //     // console.log(TempDecreaseCart)
            //     return{...state,cart:TempDecreaseCart}
            
            

            case "Total_Items":
                // console.log("totalling")
                return {...state, totalItems: state.cart.reduce((total,cartItem)=> Number(cartItem.quantity)+ Number(total),0 )}
           
                // return {...state, totalItems:0}
           
                // state.cart.map((item)=>{
            //     if(item.id === action.payload.id){
            //         if(item.quantity === 1){
            //             // remove(item.id);
            //             console.log(item)
            //             state.cart.filter((item)=> item.id !== action.payload.id)
            //         }
            //         else{
            //             item = {...item, quantity:Number(item.quantity)-1}
            //         console.log("id equal")
            //         }
                    
            //     }
            //     return item;
            //     console.log("id equal")
            // })    
            // return{...state,cart:TempDecreaseCart}
            // console.log("i outside")
          
        case "CLEAR":
            return {...state, cart:[]}
        
        case "REMOVE":
            // console.log("item removed")
            return {...state, cart:state.cart.filter((item)=> item.id !==action.payload.id)}
          
            










        case "FILTER":
            // console.log(state.filteredData)
            if(action.payload.tag === "All"){
                return {...state, filteredData:  Products}
            }
            else{
                return {...state, filteredData:Products.filter((item)=> item.tag === action.payload.tag)}
            }
             // return state










             
        case "UPDATE_USER":

        return {...state, user : action.payload.user}
        //     console.log("updating")
        // console.log(action.payload.user)
            
          
        default:
            return state
    }
}

