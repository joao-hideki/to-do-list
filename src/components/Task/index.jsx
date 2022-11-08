import {Container} from './style';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { Modal } from '../Modal/index';
import {FaTrashAlt, FaEdit, FaCheck} from 'react-icons/fa';

export const Task = () => {
    const [editTask, setEditTask] = useState(false);
    const {state, dispatch} = useContext(Context);
    const {taskList} = state;
    const [editingTask, setEditingTask] = useState('');

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
                <div key={item.id}>
                    <Container  done={item.done}>
                        <div onClick={() => handleDoneTask(item.id)}>
                            <FaCheck/>
                        </div>
                        <h2>{item.task}</h2>
                        <FaEdit onClick={() => {
                            setEditTask(true);
                            setEditingTask(item);
                        }}/>
                        <FaTrashAlt onClick={() => handleDeleteTask(item.id)}/>
                    </Container>
                    {editTask && 
                        <Modal close={() => setEditTask(false)} editing={editTask} editingTask={editingTask}/> 
                    }
                </div>
            ))}
        </>
    );
}