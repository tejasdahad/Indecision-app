class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisible = this.handleVisible.bind(this);
        this.state = {
            visible: false
        };
    }
    handleVisible() {
        this.setState((prevState) => {
            return{
                visible: !prevState.visible
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleVisible}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
                {this.state.visible && <p>Hey, here are some details.</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
