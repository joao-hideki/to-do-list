import { Overlay, Box, Header, Content, Footer } from './style';
import { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';



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
                        <h2>Confirmar</h2>
                        <button onClick={close}>X</button>
                    </Header>
                    <Content>
                        <input 
                            type="text" 
                            onChange={(e) => setTask(e.target.value)} 
                            value={task}
                        />
                    </Content>
                    <Footer>
                        <button onClick={editing ? editTask : addTask}>
                            {editing ? 'Editar' : 'Adicionar Tarefa'}
                        </button>
                        <button onClick={close}>Cancelar</button>
                    </Footer>
                </Box>
            </Overlay>
    );
}