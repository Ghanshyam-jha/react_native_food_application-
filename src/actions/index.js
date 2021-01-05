const url = "http://localhost:8600"

export function GetFoodList(){
    const output = fetch(`${url}/fatfree`, {method:'GET'})
    .then(response => response.json())
   
    return{
        type:'Get_Food',
        payload:output
    }

    
}

export function GetVeanList(){
    const output = fetch(`${url}/vegan`, {method:'GET'})
    .then(response => response.json())
   
    return{
        type:'Get_Vegan_Food',
        payload:output
    }

    
}