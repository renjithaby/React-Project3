/**
 * Created by rabby on 04/08/2017.
 */
import React from "react";
import Radium from "radium";
import AddTodo from "./AddTodo.js"
import TodoList from "./TodoList.js"
import TodoFilter from "./TodoFilter.js"

@Radium
export   class Todos extends React.Component
{
    constructor(props) {


        super();
    }
      // console.log(props);





	render()
	{
        console.log(this.props);
		return (
            <div class="container" style={[ styles.center ]}>

                <div class="row" style={[ styles.section ]}>
                    <div class="col" >
                        <h1> Im in the </h1>
                        <AddTodo  addTodoItem = {this.props.addTodoItem}/>
                    </div>
                </div>
                <div class="row" style={[ styles.section ]}>
                    <div class="col">
                        <h1> {this.props.showAll} </h1>
                        <TodoFilter showAll = {this.props.showAll} updateTodoFilter = {this.props.updateTodoFilter}/>
                        <TodoList todoList = {this.props.todoList} updateTodoItem = {this.props.updateTodoItem} deleteTodoItem = {this.props.deleteTodoItem}/>
                        <div class="card">
                            <div class = "card-block">
                                <h1> hell0</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}


// You can create your style objects dynamically or share them for
// every instance of the component.
var styles = {
    center : {
        textAlign: "center"
    },
    section : {
        paddingTop: "1em",
         paddingBottom: "1em"
    }

};