import React, { Component } from 'react';

/**
 *  css属性
 *  class需写成className
 *  for需写成htmlFor
 */


class Home extends Component {

    constructor(props) {
        super(props)

        //定义数据 
        this.state = {
            name: '张三',
            color: 'red',
            style: {
                'color': 'pink'
            },
            list: ['apple', 'banana', 'peach'],
            list2: [<h4 key = '1'>苹果</h4>,<h4 key = '2'>香蕉</h4>,<h4 key = '3'>桃子</h4>],
            value: ''
        }
    }

    run=(e)=> {
        console.log(e)
        e.target.style.color = 'red'
    }

    setName=(str)=>{
        this.setState({
            name: str
        })
    }

    inputChange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }

    getInput=()=>{
        console.log(this.state.value)
    }

    render() {
        var listResult = this.state.list.map((value, key) => {
            return <li key = {key}>{value}</li>
        })

        return (
            <div>
                <p>{ this.state.name }</p>
                <p className='red'>绑定属性</p>
                <p className={this.state.color}>绑定属性</p>
                <p style={{'color': 'blue'}}>绑定属性</p>
                <p style={this.state.style}>绑定属性</p>
                <hr/>
                {this.state.list2}
                <ul> 
                    {listResult}
                </ul>
                <hr/>
                {/* run方法要想获取this.state数据，需改变this指向
                  * <button onClick={this.run.bind(this)}>
                  * 或者在 constructor 里添加一个 this.run = this.Runtime.bind(this)
                  * 或者在run() 改成 run=()=>{}
                */}
                <button onClick={this.run}>这是一个事件</button>
                <br/>
                <button onClick={this.setName.bind(this, '李四')}>执行方法传值</button>
                <hr/>
                <input onChange={this.inputChange}/><button onClick={this.getInput}>获取input的值</button>
            </div>
        )
    }
}

export default Home;