import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props)

        //定义数据 
        this.state = {
            name: '张三'
        } 
    }

    render() {
        return (
            <div>{ this.state.name }</div>
        )
    }
}

export default Home;