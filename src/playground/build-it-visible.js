const appRoot = document.getElementById('app');
let visible = false;
const toggle = () => {
    visible = !visible;
    render();
}
const render = () => {
    const template = (
        <div>
            <h1>Visibility</h1>
            <button onClick={toggle}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <p>Hey, There are some details you can see!</p>}
        </div>
    );

    ReactDOM.render(template,appRoot);
}
render();