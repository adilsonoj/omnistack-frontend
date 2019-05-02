import React, { Component } from 'react';
import api from '../../services/api'
import logo from "../../assets/logo.svg";
import "./styles.css";

export default class main extends Component {
    state = {
        newBox: ''
    };

    handleSubmit = async e =>{
        e.preventDefault();
        console.log(this.state.newBox)
       const response =  await api.post('/boxes',{
           title: this.state.newBox
       });
       console.log(response.data);
    };

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value })
    }
  render() {
    return( 
        <div id="main-container" >
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt=""/>
                <input placeholder="cirar box"  value={this.state.newBox} 
                    onChange={this.handleInputChange}/>
                <button type="submit" >Criar</button>
            </form>
        </div>
    );
  }
}
