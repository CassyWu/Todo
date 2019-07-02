import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';

const TodoListUI =(props)=>{
    return(
        <div>
            <div>
                <Input placeholder="Todo Info" value={props.inputValue} style={{width: '300px'}} onChange={props.handleInputChange} id="addInput"/>
                <Button type="primary" onClick={props.addThing}>提交</Button>
                <List style={{marginRight:'10px', width: '300px'}}
                      bordered
                      dataSource={props.list}

                      renderItem={(item, index) => (
                          <List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>
                      )}
                />
            </div>
        </div>
    );
};

export default TodoListUI;