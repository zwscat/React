import React, { Component } from 'react';

import Storage from '../model/storage';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{title:'录制ionic',checked:true},
            {title:'录制node.js',checked:false},
            {title:'录制vue',checked:true}]
        };
    }

    handleTit=()=>{
        let list = this.state.list
        list.push({
            title: this.refs.title.value,
            checked: false
        })
        this.setState({
            list: list
        })
        this.refs.title.value = ''

        Storage.set('list',list)
    }
    
    handleDel=(key)=>{
        let list = this.state.list
        list.splice(key,1)
        this.setState({
            list: list
        })

        Storage.set('list',list)
    }

    handleCheck=(key)=>{
        let list = this.state.list
        list[key].checked = !list[key].checked
        this.setState({
            list: list
        })

        Storage.set('list',list)
    }

    //生命周期函数 页面加载就会触发
    componentDidMount(){
        let list = Storage.get('list')
        if(list) {
            this.setState({
                list: list
            })
        }
    }

    render() {
        return (
            <div>
                <h2>React Todolist案例演示</h2>
                <input type='text' ref='title'/><button onClick={this.handleTit}>增加</button>
                <hr/>
                <h2>代办事项</h2>
                <ul>
                    {
                        this.state.list.map((val,key)=>{
                            if(!val.checked) {
                                return (
                                    <li key={key}><input type='checkbox' checked={val.checked} onChange={this.handleCheck.bind(this,key)}/>{val.title}<button onClick={this.handleDel.bind(this,key)}>删除</button></li>
                                )
                            } 
                        })
                    }
                </ul>
                <hr/>
                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map((val,key)=>{
                            if(val.checked) {
                                return (
                                    <li key={key}><input type='checkbox' checked={val.checked} onChange={this.handleCheck.bind(this,key)}/>{val.title}<button onClick={this.handleDel.bind(this,key)}>删除</button></li>
                                )
                            } 
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;