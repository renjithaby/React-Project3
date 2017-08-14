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
        let index = state.findIndex(item => item.id  == action.id);
        console.log(index);
         console.log(state);
        return [...state.slice(0,index), {id : state[index].id, title : state[index].title, status : "completed"}, ...state.slice(index+1) ];

    }

    function deleteTodo(state,action) {
         let index = state.findIndex(item => item.id  == action.id);
        return [...state.slice(0,index), ...state.slice(index+1) ];
    }
}




export default TodosReducer;