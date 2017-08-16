/**
 * Created by rabby on 13/08/17.
 */
const FilterReducer = (state = {showAll:true}, action = {}) => {

    switch (action.type){

        case "UPDATE_TODO_FILTER" :
            console.log("my state....");
            console.log(state);
            return updateFilter(state);
            break;

        default:
            return state;
            break;
    }

   function updateFilter(state){

       return  Object.assign({}, state,{showAll: !state.showAll});

    }

}




export default FilterReducer;