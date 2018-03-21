import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import ListItem from 'material-ui/List/ListItem';

function Todo({ data, toggleTodo, removeTodo }) {
    return <ListItem
        key={data.id}
        leftCheckbox={
            <Checkbox
                checked={data.completed}
                onClick={() => toggleTodo(data.id)}
            />}
    >
        <span style={style.text}>{data.itemText}
        <i
            style={style.close}
            className="material-icons close-icon"
            onClick={(e) => {
                e.preventDefault();
                const id = data.id;
                removeTodo(id);
            }}
        >
          close
        </i></span>
    </ListItem>
}

const style = {
    close: {
        color: 'red',
        lineHeight: 'unset'
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}

Todo.propTypes = {
    data: PropTypes.object,
    toggleTodo: PropTypes.func,
}

export default Todo;