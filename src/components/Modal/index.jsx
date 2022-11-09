import { Overlay, Box, Header, Content, Footer } from './style';
import { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import {FaTimes} from 'react-icons/fa';



export const Modal = ({close, editing, editingTask}) => {
    const [task, setTask] = useState('');
    const {state, dispatch} = useContext(Context);
    const addTask = () => {
        dispatch({
          type: 'ADD_TASK',
          payload: {
            task: task
          }
        });
        setTask('');
      }
      const editTask = () => {
        dispatch({
            type: 'EDIT_TASK',
            payload: {
                id: editingTask.id,
                newTask: task
            }
        })
        close();
      }
      useEffect(() => {
        if(editing){
            setTask(editingTask.task);
        }
      }, []);
   
    return(           
            <Overlay>
                <Box>
                    <Header>
                        <h2>{editing ? 'Editar Tarefa' : 'Adicionar Tarefa'}</h2>
                        <FaTimes onClick={close}/>
                    </Header>
                    <Content>
                        <textarea 
                            type="text" 
                            onChange={(e) => setTask(e.target.value)} 
                            value={task}
                            placeholder={editing ? '' : 'Ex: Passear com o cachorro'}
                        />
                    </Content>
                    <Footer>
                        <button onClick={editing ? editTask : addTask}>Confirmar</button>
                        <button onClick={close}>Cancelar</button>
                    </Footer>
                </Box>
            </Overlay>
    );
}