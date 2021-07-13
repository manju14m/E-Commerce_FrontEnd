import Products from '../Data/ProductData'




const initialState={
    cartItems : [], 
    totalItems :0,
    filteredData : Products
    // user : "Guest"
}

export default function cartReducer(state = initialState,action){
    // let arr = []
    switch(action.type){
        case "add_to_redux" :
            const {filteredData,totalItems } = action.payload
            console.log("redux")
            console.log(filteredData)
            console.log(totalItems)
            return {...state, filteredData,totalItems 
            // return true;
        }

        case "Add_to_cart":

        let temparr = state.cartItems.map(item => item.id)
            // console.log(`temparr ${temparr}`)

        if (temparr.includes(action.payload.id)){
            // console.log("item present")
            let Temp = state.cartItems.map((item)=>{
                if(item.id === action.payload.id){
                    item = {...item, quantity:Number(item.quantity)+1}
                }
                return item;
            }) 
            return{...state,cartItems:Temp}
        }    
        else{
            // console.log("not present")
            // console.log(action.payload.id)
            let temp=  {...state , cartItems: [...state.cartItems,action.payload]}
            // console.log(temp.cartItems)
            // console.log(temp.cartItems)
            let ids = temp.cartItems.map(o => o.id)
                // console.log(ids)
            let filtered = temp.cartItems.filter(({id}, index) => !ids.includes(id, index + 1))  
            // console.log(filtered)  
    
                // return temp
                return {...state,cartItems:filtered} 
        }
           




        //   let temp =  {...state, cartItems:[...state.cartItems,action.payload] }


        //    let Temp = state.cartItems.map((item)=>{
        //         if(item.id === action.payload.id){
        //             item = {...item, quantity:Number(item.quantity)+1}
        //             // console.log(item.id)
        //         }
                
        //         // return {...state , cartItems: [...state.cartItems,action.payload]}
        //         return item;
        //     }) 


        //     let ids = Temp.map(o => o.id)
        //     console.log(ids)
        //     let filtered = Temp.filter(({id}, index) => !ids.includes(id, index + 1))

        //     return {...state,cartItems:filtered} 




            // let ids = arr.map(o => o.id)
            // console.log(ids)
            // let filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))






            // return {...state, cartItems:[...state.cartItems,action.payload] };

            // let Temp = state.cartItems.map((item)=>{
            //     if(item.id === action.payload.id){
            //         item = {...item, quantity:Number(item.quantity)+1}
            //         // console.log(item.id)
            //     }
            //     // else{
            //     //    return action.payload
            //     // }
            //     // console.log(item)
            //     // // return {...state , cartItems: [...state.cartItems,action.payload]}
            //     return item;
            // }) 

            // // return {...state,cartItems:Temp}

            // // console.log(temp)



            // return {...state , cartItems: [...state.cartItems,action.payload]}
            
        



            // console.log("adding to cartItems")
            // for(let i=0; i<=state.cartItems.length; i++){
            //     console.log(i)
            // }
            // // if(action.payload.id in state.cartItems.id){

            // }
            
            // if(action.payload.id ===1){
            //     console.log(arr)
            // }

            // if (state.cartItems.length === 0){
            //     console.log(state.cartItems.length)
            //     console.log(state.cartItems)
            //     return {...state, cartItems:[...state.cartItems,action.payload] };
                
            // }

            // else{
            //     arr = [1,2,3,4]
            //     return {...state, cartItems:[...state.cartItems,action.payload] };
            // }
                
            // state.cartItems.map((item)=>{
            //     if(item.id === action.payload.id){
            //         console.log("item present")
                
                
            // })
            


            
            
        case "INCREASE":
            // console.log("increasing :" + action.payload.id)
            let TempIncreaseCart = state.cartItems.map((item)=>{
                if(item.id === action.payload.id){
                    item = {...item, quantity:Number(item.quantity)+1}
                }
                return item;
            }) 
            return{...state,cartItems:TempIncreaseCart}
            
        case "DECREASE":
            let TempDecreaseCart = state.cartItems.map((item)=>{
                if(item.id === action.payload.id && item.quantity !==1){
                    item = {...item, quantity:Number(item.quantity)-1}
                }
                return item;
            }) 
            return{...state,cartItems:TempDecreaseCart}


            // let TempDecreaseCart = [];
            // if(action.payload.quantity === 1 ){
            //     TempDecreaseCart =  state.cartItems.filter((item)=> item.id !== action.payload.id );
            // // console.log("its one")
            // console.log(TempDecreaseCart)
            // }
            // else{
            //      TempDecreaseCart = state.cartItems.map((item)=>{
            //         if(item.id === action.payload.id){
            //             item = {...item, quantity:Number(item.quantity)-1}
                    
            //         }

            //         return item;
            //     })
            //     // console.log(TempDecreaseCart)
            //     return{...state,cartItems:TempDecreaseCart}
            
            

            case "Total_Items":
                // console.log("totalling")
                return {...state, totalItems: state.cartItems.reduce((total,cartItem)=> Number(cartItem.quantity)+ Number(total),0 )}
           
                // return {...state, totalItems:0}
           
                // state.cartItems.map((item)=>{
            //     if(item.id === action.payload.id){
            //         if(item.quantity === 1){
            //             // remove(item.id);
            //             console.log(item)
            //             state.cartItems.filter((item)=> item.id !== action.payload.id)
            //         }
            //         else{
            //             item = {...item, quantity:Number(item.quantity)-1}
            //         console.log("id equal")
            //         }
                    
            //     }
            //     return item;
            //     console.log("id equal")
            // })    
            // return{...state,cartItems:TempDecreaseCart}
            // console.log("i outside")
          
        case "CLEAR":
            return {...state, cartItems:[]}
        
        case "REMOVE":
            // console.log("item removed")
            return {...state, cartItems:state.cartItems.filter((item)=> item.id !==action.payload.id)}
          
            










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

