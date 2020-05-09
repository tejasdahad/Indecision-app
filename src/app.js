console.log('App.js is running');
const object = {
    title: 'Indecision App',
    subtitle: 'This is JSX',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        object.options.push(option);
        e.target.elements.option.value='';
        renderFun();
    }
}

const removeAll = () => {
    object.options = [];
    renderFun();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * object.options.length);
    const option = object.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderFun = () => {
    const template = (<div>
    <h1>{object.title}</h1>
    {object.subtitle && <p>{object.subtitle}</p>}
    {object.options.length > 0 ? 'Here are your options' : 'No options available'}
    <button disabled={object.options.length > 0 ? false: true} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
        {object.options.length > 0 && object.options.map((option) => (<li key={option}>{option}</li>))}
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
    </form>
    </div>);

    ReactDOM.render(template,appRoot);

}
renderFun();
