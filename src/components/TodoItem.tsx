import styles from './TodoItem.module.css';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react';

const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void, onEditTodo: (text: string) => void }> = (
  props
) => {
  const [idEdit, setIdEdit] = useState(false);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const saveEditTodo = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      const enteredText = todoTextInputRef.current!.value;

      if (enteredText.trim().length === 0) {
        // throw an error
        return;
      }
      props.onEditTodo(enteredText)
      setIdEdit(false)
    }
  }
  return (

    <li className={styles.main} >
      {idEdit ? <div> <input className={styles.editTodo} defaultValue={props.text} onKeyDown={saveEditTodo} ref={todoTextInputRef}></input></div> :
        <div className={styles.item}>
          <div>
            {props.text}
          </div>
          <div className='flex'>
            <PencilIcon className={styles.edit} onClick={() => {
              setIdEdit(true) //<== set idEdit state here
            }
            } />
            <TrashIcon className={styles.edit} onClick={props.onRemoveTodo}
            />
          </div>
        </div>}

    </li>
  );
};

export default TodoItem;
