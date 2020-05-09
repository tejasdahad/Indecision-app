const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
    console.log('Add one');
    count++;
    renderCounterApp();
}
const minusOne = () => {
    console.log('Minus one');
    count--;
    renderCounterApp();
}
const reset = () => {
    console.log('Reset');
    count=0;
    renderCounterApp();
}



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();