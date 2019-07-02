import actionTypes from './actionTypes';
import store from "./index";
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = (value)=>({
    type: actionTypes.ADD_NEW_THING,
    value
});

export const getDeleteAction = (index)=>({
    type: actionTypes.DELETE_ITEM,
    index
});

export const getInitListAction = (data)=>({
    type: actionTypes.INIT_LIST,
    data
});

/* redux thunk
export const getInitList = ()=> {
    return (dispatch)=>{
        axios.get('http://localhost:3001/json').then((res)=>{
            let data = res.data;
            const action = getInitListAction(data);
            dispatch(action);
        })
    }
};
*/

//saga
export const getInitListSaga = ()=> ({
   type: actionTypes.GET_INIT_LIST_SAGA
});