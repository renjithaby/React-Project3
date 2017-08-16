/**
 * Created by rabby on 13/08/17.
 */
import React from "react";
import * as Actions from  "../../Actions/Actions";
import { connect } from 'react-redux';
import {Todos} from "../Todos";
/*import {FinishedTodos} from "../FinishedTodos";*/





const getTodoList = (state) =>{
    console.log("state.generalInfo.showAll.....");
    console.log(state.generalInfo.showAll);
    if (state.generalInfo.showAll === true){
        return state.todoList;
    }else {
        return state.todoList.filter(t=>t.status !== "completed");
        console.log("state.todoList");
        console.log(state.todoList);
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
    console.log("update the filter");
    dispatch (Actions.updateTodoFilter());

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

