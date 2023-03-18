import * as React from 'react';
import Todos from '../models/todos';


type TodosContextObj = {
    items: Todos[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: number) => {},
  });

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
    const [todos, setTodos] = React.useState<Todos[]>([]);

    const addTodo = (todoText: string) => {
        const newTodo = new Todos(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodo = (todoId: number) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };


    const contextValue: TodosContextObj = {
        items: todos,
        addTodo,
        removeTodo,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;