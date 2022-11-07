import './App.css'
import { useState, useContext, useEffect } from 'react';
import {Modal} from './components/Modal/index';
import { Context } from './context/Context';
import { Task } from './components/Task/index';
const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {state, dispatch} = useContext(Context);


  return (
    <div>
      <button onClick={() => setIsOpenModal(true)}>Adicionar Tarefa</button>
      <Task openModal={setIsOpenModal}/>
      {isOpenModal && <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}/>}
    </div>
  )
}

export default App
