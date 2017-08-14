/**
 * Created by rabby on 13/08/17.
 */
import { combineReducers } from 'redux';
import TodosReducer from './TodosReducer';
import FilterReducer from './FilterReducer';

const TodoApp = combineReducers({
    todoList:TodosReducer,
    generalInfo : FilterReducer
})

export default TodoApp