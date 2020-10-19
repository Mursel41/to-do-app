import React from "react";
import { connect } from 'react-redux';

import { toggleTodoAction } from '../store/actions';

const Done = props => {
    return (
        <li className="Done">
            <span className="Done__text">{props.text}</span>
            <button onClick={props.handleClick.bind(this, props.id)} className="btn Done__toggle">&#8635;</button>
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    handleClick: id => dispatch(toggleTodoAction(id))
});

export default connect(null, mapDispatchToProps)(Done);
