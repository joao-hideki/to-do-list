import { Overlay, Box, Header, Content, Footer } from './style';
import { useState, useContext, ReactDOM } from 'react';
import { Context } from '../../context/Context';

export const Modal = ({close}) => {
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
                        value={task}/>
                    </Content>
                    <Footer>
                        <button onClick={addTask}>Adicionar Tarefa</button>
                        <button onClick={close}>Cancelar</button>
                    </Footer>
                </Box>
            </Overlay>
    );
}