import './App.css';
import * as C from './App.style';
import { useState, useContext, useEffect } from 'react';
import {Modal} from './components/Modal/index';
import { Context } from './context/Context';
import { Task } from './components/Task/index';
import { Navbar } from './components/Navbar/index';

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  

  return (
    <C.Container>
      <Navbar/>
      <C.Content>
        <button onClick={() => setIsOpenModal(true)}>Adicionar Tarefa</button>
        <Task openModal={setIsOpenModal}/>
        {isOpenModal && <Modal close={() => setIsOpenModal(false)}/>}
      </C.Content>
    </C.Container>
  )
}

export default App
