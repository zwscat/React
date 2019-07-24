import React, { Component } from 'react';

import Son from './Son'

class Fater extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: '我是来自父亲的信息'
         };
    }

    run=()=>{
        alert('我是来自父亲的方法')
    }

    getData=()=>{
        alert('获取父子组件的所有方法')
    }

    getChildData=(val)=>{
        this.setState({
            msg: val
        })
    }

    getSon=()=>{
        this.refs.son.run()
        console.log(this.refs.son.state.val)
    }

    render() {
        return (
            <div>
                我是父亲
                <Son msg={this.state.msg} run={this.run} all={this} ref='son'/>
                {this.state.msg}<br/><br/>
                <button onClick={this.getSon}>父组件调用子组件的方法</button>
            </div>
        );
    }
}

export default Fater;