/*var getFoodList= [];
export default function(state=getFoodList, action){
    switch(action.type){
        case 'Get_Food': 
            {getFoodList:action.payload
            console.log(action, 'action');
            return getFoodList;
        }
            break;
        }   
            return getFoodList
}*/


export default function(state={}, action){
    switch(action.type){
        case 'Get_Food':
            return{...state,foodcat:action.payload}
        
        default:
            return state
    }
}