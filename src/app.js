class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state= {
            options: []
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
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of a computer.';
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action handleMakeDecision={this.handleMakeDecision} hasOptions={this.state.options.length > 0} />
            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
            <AddOption handleAddOption={this.handleAddOption} />
        </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handleMakeDecision}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options Component comes here.
                <p>{this.props.options.length}</p>
                {this.props.options.length >0 && this.props.options.map((option) => <Option key={option} option={option} />)}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=> {
            return { error };
        });
        e.target.elements.option.value='';

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));