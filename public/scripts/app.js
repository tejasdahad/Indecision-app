class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    handleMakeDecision() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists';
        }
        this.setState(prevState => {
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
        return React.createElement(
            'div',
            null,
            React.createElement(Header, { title: title, subtitle: subtitle }),
            React.createElement(Action, { handleMakeDecision: this.handleMakeDecision, hasOptions: this.state.options.length > 0 }),
            React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
            React.createElement(AddOption, { handleAddOption: this.handleAddOption })
        );
    }
}

class Header extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                this.props.title
            ),
            React.createElement(
                'h2',
                null,
                this.props.subtitle
            )
        );
    }
};

class Action extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { disabled: !this.props.hasOptions, onClick: this.props.handleMakeDecision },
                'What should I do?'
            )
        );
    }
}

class Options extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            'Options Component comes here.',
            React.createElement(
                'p',
                null,
                this.props.options.length
            ),
            this.props.options.length > 0 && this.props.options.map(option => React.createElement(Option, { key: option, option: option })),
            React.createElement(
                'button',
                { onClick: this.props.handleDeleteOptions },
                'Remove All'
            ),
            React.createElement(Option, null)
        );
    }
}

class Option extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                this.props.option
            )
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return { error };
        });
        e.target.elements.option.value = '';
    }
    render() {
        return React.createElement(
            'div',
            null,
            this.state.error && React.createElement(
                'p',
                null,
                this.state.error
            ),
            React.createElement(
                'form',
                { onSubmit: this.handleAddOption },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    { className: 'button' },
                    'Add Option'
                )
            )
        );
    }
}

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
