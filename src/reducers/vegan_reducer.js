
export default function(state={}, action){
    switch(action.type){
        case 'Get_Vegan_Food':
            return{...state,foodvegcat:action.payload}
        
        default:
            return state
    }
}