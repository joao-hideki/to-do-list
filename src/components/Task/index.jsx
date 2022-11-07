import {Container} from './style';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { Modal } from '../Modal/index';

export const Task = () => {
    const [editTask, setEditTask] = useState(false);
    const {state, dispatch} = useContext(Context);
    const {taskList} = state;

    const handleDeleteTask = (id) => {
        dispatch({
            type: 'DEL_TASK',
            payload: {
                id: id
            }
        });
    }
    const handleDoneTask = (id) => {
        dispatch({
            type: 'DONE_TASK',
            payload: {
                id: id 
            }
        });
    }

    return(
        <>
            {taskList.map((item) => (
                <>
                    <Container key={item.id} done={item.done}>
                        <div onClick={() => handleDoneTask(item.id)}>X</div>
                        <h2>{item.task}</h2>
                        <button onClick={() => setEditTask(true)}>Editar</button>
                        <button onClick={() => handleDeleteTask(item.id)}>Deletar</button>
                    </Container>
                    {editTask && <Modal close={() => setEditTask(false)} editingTask={item.task}/>}
                </>
            ))}
        </>
    );
}