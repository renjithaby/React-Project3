/**
 * Created by rabby on 13/08/17.
 */
import React from "react";
import * as Actions from  "../../Actions/Actions";
import { connect } from 'react-redux';
import {Todos} from "../Todos";
/*import {FinishedTodos} from "../FinishedTodos";*/





const getTodoList = (state) =>{
    if (state.generalInfo.showAll === true){
        return state.todoList;
    }else {
        state.todoList.filter(t=>t.status !== "completed");
    }
}


const deleteTodoItem = (dispatch,id) => {
    dispatch (Actions.deleteTodo(id));
}

const addTodoItem = (dispatch,text) => {
    dispatch (Actions.createTodo(text));
}

const updateTodoItem = (dispatch,id) => {
    dispatch (Actions.updateTodo(id));
}
const updateTodoFilter = (dispatch) => {
    dispatch (Actions.updateTodoFilter());
    console.log("update the filter");
}

const mapStateToProps = state => {
    return {
        todoList: getTodoList(state),
        showAll:state.generalInfo.showAll
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoItem: text => {
            addTodoItem(dispatch,text)
        },
        updateTodoItem: id =>{
            updateTodoItem(dispatch,id)
        },
        deleteTodoItem: id =>{
            deleteTodoItem(dispatch,id)
        },
        updateTodoFilter: () =>{
            updateTodoFilter(dispatch)
        }

    }
}

export const HomeTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)

