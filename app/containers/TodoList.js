import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { addTodo, toggleTodo, removeTodo } from '../actions';


import Todo from '../components/Todo';

const TodoList = ({todos, removeTodo, toggleTodo, filter}) => {
    if (filter) {
        todos = todos.filter(e => e.completed)
    }
    return (
        <List>
            { todos && todos.map(e => (
                <Todo
                    key={e.id}
                    data={e}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                />
            )) }
        </List>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id)),
})

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);