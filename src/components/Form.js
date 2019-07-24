import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            sex: 1,
            city: '',
            citys: ['广州','深圳','东莞'],
            hobby: [{text:'打游戏',checked:true}, 
                {text:'看电影', checked:false}, 
                {text:'打火锅',checked:false}]
        };
    }

    handleSub=(e)=>{
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby)
    }

    handleName=(e)=>{
        this.setState({
            name: e.target.value
        })
    }

    handleSex=(e)=>{
        this.setState({
            sex: e.target.value
        })
    }

    handleCity=(e)=>{
        this.setState({
            city: e.target.value
        })
    }

    handleHob=(key)=>{
        let hobby = this.state.hobby
        hobby[key].checked = !hobby[key].checked
        this.setState({
            hobby: hobby
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSub}>
                    姓名：<input type='text' value={this.state.name} onChange={this.handleName}/><br/>
                    性别：<input type='radio' value='1' checked={this.state.sex ==1} onChange={this.handleSex}/>男
                    <input type='radio' value='0' checked={this.state.sex ==0} onChange={this.handleSex}/>女<br/><br/>
                    所在城市：<select value={this.state.city} onChange={this.handleCity}>
                        {
                            this.state.citys.map((value,key)=>{
                                return <option key={key}>{value}</option>
                            })
                        }
                    </select><br/>
                    爱好：{
                        this.state.hobby.map((value,key)=>{
                            return (
                                <span key={key}>
                                    <input type='checkbox' checked={value.checked} onChange={this.handleHob.bind(this,key)}/>{value.text}
                                </span>
                            )
                        })
                    }
                    <br/>
                    <input type='submit' value='提交'/>
                </form>
            </div>
        );
    }
}

export default Form;