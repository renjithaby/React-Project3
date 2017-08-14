/**
 * Created by rabby on 13/08/17.
 */
const TodosReducer = (state = [], action = {}) => {

    switch (action.type){

        case "CREATE_TODO" :
            return createTodo(state,action);

        case "UPDATE_TODO":
            return updateTodo(state,action);

        case "DELETE_TODO":
            return deleteTodo(state,action);
        default:
            return state;
            break;
    }

    function createTodo(state,action){
        return [ ...state, { id: Date.now(), title: action.text, status: "active" }];
    }

    function updateTodo(state,action){
        return [...state, {id: action.id,status : "completed"}];

    }

    function deleteTodo(state,action) {

        return state.todoList.filter(t=>t.id === action.id);
    }
}




export default TodosReducer;