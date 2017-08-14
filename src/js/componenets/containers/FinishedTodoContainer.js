/**
 * Created by rabby on 13/08/17.
 */
import  React from  "react";
export {default as  MyTodos} from "../MyTodo.js";
import { MyTodos } from "../MyTodo.js";
import { FinishedTodos } from "../FinishedTodos.js";
import * as Actions from  "../../Actions/Actions";
import { connect } from 'react-redux';



const getTodoList = (state) =>{
    console.log("state.generalInfo.showAll");
    console.log(state.generalInfo.showAll);
    if (state.generalInfo.showAll === true){
        return state.todoList;
    }else {
        return state.todoList.filter(t=>t.status !== "completed");
    }
}

const mapStateToProps = state => {
    return {
        todoList: getTodoList(state),
        showAll : state.generalInfo.showAll
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

export const FinishedTodoContainer = connect(mapStateToProps,mapDispatchToProps
)( FinishedTodos)

//export default FinishedTodoContainer;
