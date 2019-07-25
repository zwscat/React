import React, { Component } from 'react';
import axios from 'axios'


/**
 * 组件加载的时候3个生命周期
 *      componentWiddMount
 *      render
 *      compentenDidMount
 * 组件更新时的生命周期
 *      componentWillUpdate
 *      render
 *      componentDidUpdate
 * 组件销毁时
 *      componentDidUnmount
 *  */

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default Axios;