import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "./todoReducer";


const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}

export const useTodo = () => {

    const [ todos, dispatchTodos ] = useReducer( todoReducer, [], init );
    
    useEffect(() => {
        // localStorage solo permite grabar strings
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
          
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        // Con el dispatch se manda la accion al reducer
        dispatchTodos( action );        
    }

    const handleDeleteTodo = ( id ) => {        
        dispatchTodos({
            type: '[TODO] Remove Todo',
            payload: id
        });
        
    }

    const handleToggleTodo = ( id ) => {                
        dispatchTodos({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
