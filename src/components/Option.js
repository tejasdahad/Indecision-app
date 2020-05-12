import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.option}</p>
        {props.option && <button className="button button--link" onClick={(e) => props.handleDeleteOption(props.option)}>Remove</button>}
    </div>
);


export default Option;