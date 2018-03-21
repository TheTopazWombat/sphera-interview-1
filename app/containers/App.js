import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import TodoList from './TodoList';
import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';
import { addTodo, toggleTodo, removeTodo } from '../actions';

console.log("In App.js")

class App extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            newTodo: '',
            filter: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value);
        const newTodo = e.target.value;
        this.setState({ newTodo });
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(e);
        const newTodo = this.state.newTodo.trim();
        if (!newTodo) {
            return;
        }
        this.props.dispatch(addTodo(newTodo));
        
        this.setState({ newTodo: '' });
    }
    
    handleFilter() {
        const filter = this.state.filter;
        this.setState({ filter: !filter });
    }

    toggleTodo(id) {
        console.log(id);
        this.props.dispatch(toggleTodo(id));
    }

    removeTodo(id) {
        console.log(id);
        this.props.dispatch(removeTodo(id));
    }

    render() {
        return (
            <div>
                <Paper style={style.paper}>
                <AppBar
                    title="To Do App"
                    iconElementLeft={
                        <i
                            className="material-icons light-bulb"
                            style={style.lightBulb}
                        >
                        lightbulb_outline
                        </i>
                    }
                />
                    <br />
                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <TextField
                            hintText={'Enter Todo Text'}
                            onChange={this.handleChange}
                            value={this.state.newTodo}
                        />
                        <ListItem
                            leftCheckbox={
                                <Checkbox
                                    onClick={this.handleFilter}
                                    style={style.filterCheck}
                                />
                            }
                            style={style.filterText}
                        >
                            Show Completed Items
                        </ListItem>
                        <TodoList
                            filter={this.state.filter}
                            todos={this.props.todos}
                            toggleTodo={this.toggleTodo}
                            removeTodo={this.removeTodo}
                        />
                    </form>
                </Paper>
            </div>
        );
    }
}

const style = {
    paper: {
        width: '300px',
        margin: 'auto',
        padding: '20px',
    },
    lightBulb: {
        fontSize: '24px',
        color: 'white',
        marginTop: '12px',
    },
    filterText: {
        paddingLeft: '45px',
    },
    filterCheck: {
        marginLeft: '-10px',
    }
}

export default connect()(App);