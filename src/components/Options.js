import React from 'react';
import Option from './Option';

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
export default Options;