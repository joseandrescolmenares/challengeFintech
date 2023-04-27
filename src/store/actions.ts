import axios from 'axios'
import { Dispatch } from 'redux';


export function getAllMovies() {
  return async function (dispatch: Dispatch) {
    dispatch(cambiarLoader());
    try {
      const resultado = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: 'GET_DETAIL',
        payload: resultado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}



 
export function getType(){
    return async function(dispatch:Dispatch){
        try{ 
        const data = await axios.get('http://localhost:3001/types')
        return dispatch({
            type: 'GET_TYPES',
            payload: data.data
        })
         }catch (error){console.log(error)}
     
    }


    
}

export function cambiarLoader(){
    return{
        type: "LOADER"
    }
}

