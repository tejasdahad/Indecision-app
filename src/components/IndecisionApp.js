import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state= {
            options: []
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch (err) {
            
        } 
    }
    componentDidUpdate(prevProps, prevState){
        if([prevState.options.length !== this.state.options.length]){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleMakeDecision() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if(!option) {
            return 'Please enter a valid value';
        } else if(this.state.options.indexOf(option) > -1){
            return 'Option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(option){
        this.setState((prevState) => ({
            options: prevState.options.filter((option1) => option1 !== option)
        }));
    }
    render() {
        const subtitle = 'Put your life in hands of a computer.';
        return (
        <div>
            <Header subtitle={subtitle} />
            <Action handleMakeDecision={this.handleMakeDecision} hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions} />
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
        );
    }
}

export default IndecisionApp;