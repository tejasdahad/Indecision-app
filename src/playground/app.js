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


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}
const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleMakeDecision}>What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        {props.options.length === 0 && <p>Please start by adding an option.</p>}
        {props.options.length >0 && props.options.map((option) => <Option key={option} handleDeleteOption={props.handleDeleteOption} option={option} />)}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <Option />
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            {props.option && <button onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>}
        </div>
    );
};

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
        this.setState(()=> ({ error }));
        if(!error){
            e.target.elements.option.value='';
        }

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