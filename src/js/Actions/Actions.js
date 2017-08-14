/**
 * Created by rabby on 09/08/17.
 */

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: new Date(),
        text
    }
}
export const createTodo = (text) => {
   return {
        type: "CREATE_TODO",
        text
    };
}

export const deleteTodo = (id)=>{
   return {
        type :"DELETE_TODO",
        id
    };
}

export const updateTodo = (id) => {
   return{
        type: "UPDATE_TODO",
        id
    };
}

export const updateTodoFilter = () => {
   return {
        type :"UPDATE_TODO_FILTER"
    };
}

