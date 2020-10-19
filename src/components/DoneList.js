import React from 'react';
import { connect } from 'react-redux';
import Done from './Done';

const DoneList = props => {

    const doneItems = props.items.map(done => <Done handleClick={props.handleClick} id={done.id} text={done.text} key={done.id} />);

    return (
        <div className="DoneList">
            <h3>DONE</h3>
            <ul className="DoneList__items">
                {doneItems.length > 0 && doneItems}
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    items: state.todos.filter(item => item.done)
});

export default connect(mapStateToProps)(DoneList);