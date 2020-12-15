import {ADD_USER} from "../actionTypes";
import {ADD_PHOTOS} from "../actionTypes";

const initialState ={
    allIds:[],
    byIds:{},
    photos:{}
}

export default function (state = initialState , action){
    switch (action.type){
        case ADD_USER:{
            const {id, content}=action.payload;
            return {
                ...state,
                byIds:{...state.byIds,
                    content}
            };
        }
        case ADD_PHOTOS:{
            const {id,content}=action.payload;
            return{
                ...state,
                photos:{...state.photos,
                    content}
            }
        }
        default :return state;
    }
}