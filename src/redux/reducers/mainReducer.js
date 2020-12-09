import {ADD_USER} from "../actionTypes";

const initialState ={
    allIds:[],
    byIds:{}
}

export default function (state = initialState , action){
    switch (action.type){
        case ADD_USER:{
            const {id, content}=action.payload;
            return {
                byIds:{content}
            };
        }
        default :return state;
    }
}