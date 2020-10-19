import React from 'react';
import { connect } from 'react-redux';

import { toggleTodoAction } from '../store/actions';

const Todo = props => (
    <li className="Todo">
        <span className="Todo__text">{props.text}</span>
        <button onClick={() => props.handleClick(props.id)} className="btn Todo__toggle">&#10004;</button>
    </li>
);

const mapDispatchToProps = dispatch => ({
    handleClick: id => dispatch(toggleTodoAction(id))
});

export default connect(null, mapDispatchToProps)(Todo);