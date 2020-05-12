import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    {props.options.length === 0 && <p className="selector">Please start by adding an option.</p>}
    {props.options.length >0 && props.options.map((option, index) => <Option key={option} count={index+1} handleDeleteOption={props.handleDeleteOption} option={option} />)}
    </div>
);
export default Options;