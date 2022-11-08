import {Container, EditingArea, DoneArea, TextArea} from './style';
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
                        <DoneArea onClick={() => handleDoneTask(item.id)}>
                            <FaCheck className='check-icon'/>
                        </DoneArea>
                        <TextArea><h2>{item.task}</h2></TextArea>
                        <EditingArea>
                            <FaEdit className='edit-icon' onClick={() => {
                                setEditTask(true);
                                setEditingTask(item);
                            }}/>
                            <FaTrashAlt className='delete-icon' onClick={() => handleDeleteTask(item.id)}/>
                        </EditingArea>
                    </Container>
                    {editTask && 
                        <Modal close={() => setEditTask(false)} editing={editTask} editingTask={editingTask}/> 
                    }
                </div>
            ))}
        </>
    );
}