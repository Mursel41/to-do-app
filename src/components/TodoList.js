import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { addTodoAction } from '../store/actions';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        const value = evt.target.value
        this.setState({ newTodo: value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addItem(this.state.newTodo);
        this.setState({ newTodo: '' });
    }

    render() {
        const todoItems = this.props.items.map(todo => <Todo id={todo.id} text={todo.text} key={todo.id} />);

        return (
            <div className="TodoList">
                <form className="TodoList__form" onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" onChange={this.handleChange} value={this.state.newTodo} />
                    <button className="btn" type="submit">ADD</button>
                </form>
                <div className="TodoList__items">
                    <h3>TO DO</h3>
                    <ul>
                        {todoItems.length > 0 && todoItems}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.todos.filter(item => !item.done)
});

const mapDispatchToProps = dispatch => ({
    addItem: text => dispatch(addTodoAction(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);