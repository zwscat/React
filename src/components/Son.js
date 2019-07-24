import React, { Component } from 'react';

class Son extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val: '我是儿子'
         };
    }

    run=()=>{
        alert('我是子组件的run方法')
    }

    render() {
        return (
            <div>
                我是儿子
                <h2>{ this.props.msg }</h2>
                <button onClick={this.props.run}>调用父亲的方法</button>
                <br/><br/>
                <button onClick={this.props.all.getData}>调用父亲的所有方法</button>
                <br/><br/>
                <button onClick={this.props.all.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
                <br/><br/>
                {this.state.val}
            </div>
        );
    }
}

export default Son;