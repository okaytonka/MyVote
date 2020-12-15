import {ADD_USER} from "./actionTypes";
import {ADD_PHOTOS} from "./actionTypes";

let nextId=0;

export const addUser =(content, id)=>({
    type:ADD_USER,
    payload:{
        id:++nextId,
        content
    }
});

export const addPhotos =(content, id)=>({
    type:ADD_PHOTOS,
    payload:{
        id:-1,
        content
    }
});