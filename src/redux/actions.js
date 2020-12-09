import {ADD_USER} from "./actionTypes";
let nextId=0;

export const addUser =(content, id)=>({
    type:ADD_USER,
    payload:{
        id:++nextId,
        content
    }
});