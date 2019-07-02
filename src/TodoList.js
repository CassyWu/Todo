import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {getInputChangeAction, getAddItemAction, getDeleteAction, getInitListSaga} from './store/actionCreators';
import TodoListUI from './TodoListUI';

import store from './store/';
import axios from 'axios';


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.addThing = this.addThing.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount(){
        /*redux thunk
        const action = getInitList();
        store.dispatch(action);
        */
        const action = getInitListSaga();
        store.dispatch(action);
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    addThing(){
        let val = document.getElementById('addInput').value;
        const action = getAddItemAction(val);
        store.dispatch(action);
    }

    deleteItem(index){
        const action = getDeleteAction(index);
        store.dispatch(action);
    }

    render(){
        return(
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                addThing={this.addThing}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }
}

export default TodoList;