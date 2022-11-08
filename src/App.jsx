import './App.css';
import * as C from './App.style';
import { useState, useContext, useEffect } from 'react';
import {Modal} from './components/Modal/index';
import { Context } from './context/Context';
import { Task } from './components/Task/index';
import { Navbar } from './components/Navbar/index';
import {IoMdAddCircle} from 'react-icons/io'

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  

  return (
    <C.Container>
      <Navbar/>
      <C.Content>
        <C.AddButton onClick={() => setIsOpenModal(true)}><IoMdAddCircle/> ADICIONAR TAREFA</C.AddButton>
        <hr color='#DB4C3F'/>
        <Task openModal={setIsOpenModal}/>
        {isOpenModal && <Modal close={() => setIsOpenModal(false)}/>}
      </C.Content>
    </C.Container>
  )
}

export default App
