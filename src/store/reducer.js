import actionTypes from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action)=>{
    let newList = state.list;
    switch (action.type){
        case actionTypes.CHANGE_INPUT_VALUE:
            return{
                ...state,
                inputValue: action.value
            };
        case actionTypes.ADD_NEW_THING:
            newList.push(action.value);
            return{
                ...state,
                inputValue: '',
                list: newList
            };
        case actionTypes.DELETE_ITEM:
            newList.splice(action.index, 1);
            return{
                ...state,
                list: newList
            };
        case actionTypes.INIT_LIST:
            newList = action.data;
            return{
                ...state,
                list: newList
            }
    }
    return state;
}