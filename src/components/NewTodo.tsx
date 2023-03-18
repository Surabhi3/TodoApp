import { useRef, useContext } from 'react';
import { TodosContext } from '../provider/todos-context';

import './NewTodo.css';

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error
            return;
        }
        todosCtx.addTodo(enteredText)

    };

    return (
        <div className="todo">
            <div className="w-full max-w-md space-y-8">

                <h2 className="todo-title">
                    Add your description here
                </h2>

                <form className='mt-8 space-y-6' onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="text" className="sr-only">
                            Todo Description
                        </label>
                        <input
                            id="text"
                            type="text"
                            required
                            className="add-todo"
                            placeholder="Add Todo"
                            ref={todoTextInputRef}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500"
                    >
                        Add Todo
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTodo;
