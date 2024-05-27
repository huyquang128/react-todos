import { useRef } from 'react';
import useStore from './store';
import { addJob, deleteJob, editingJob, endEditJob, setJob, startEditJob } from './store/Actions';

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput, editIndex, editInput } = state;
    const refInput = useRef();

    const handlerAddJob = () => {
        dispatch(addJob(todoInput));
        refInput.current.focus();
    };

    const handlerEditJob = (e) => {
      e.keyCode === 13 && dispatch(editingJob(e.target.value))
    }
    
    return (
        <div>
            <input
                style={{ margin: '50px' }}
                ref={refInput}
                value={todoInput || ''}
                placeholder="Enter jobs..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handlerAddJob}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        onDoubleClick={() => dispatch(startEditJob({index, todo}))}
                        key={index}
                    >
                        {editIndex === index ? 
                          (
                            <input
                              value={editInput}
                              onChange={e => dispatch(editingJob(e.target.value))}
                              onKeyDown={e => handlerEditJob(e)}
                              onBlur={(e) => dispatch(endEditJob(e.target.value))}
                            />
                          ) : (
                            <>
                                {todo}
                                <span
                                    onClick={() => dispatch(deleteJob(index))}
                                >
                                  x
                                </span>
                            </>
                          )
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
