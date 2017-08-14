/**
 * Created by rabby on 13/08/17.
 */
const FilterReducer = (state = {showAll:true}, action = {}) => {

    switch (action.type){

        case "UPDATE_TODO_FILTER" :
            return updateFilter(state);

        default:
            return state;
            break;
    }

   function updateFilter(state){

       return [...state , {showAll : !state.showAll}];

    }

}




export default FilterReducer;