import { put, takeEvery } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import {getInitListAction} from "./actionCreators";
import axios from 'axios';

function* mySaga() {
    yield takeEvery(actionTypes.GET_INIT_LIST_SAGA, getInitData);
}

function* getInitData() {
    try{
        const res = yield axios.get('http://localhost:3001/json');
        const action = getInitListAction(res.data);
        yield put(action); //注意:忘记在put前面加上yield会获取不到数据
    }catch (e) {
        console.log('list.json请求失败')
    }
}

export default mySaga;