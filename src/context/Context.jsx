import { createContext, useReducer} from "react";
import {taskListInitialState, taskListReducer} from '../reducers/taskList';

const initialState = {
    taskList: taskListInitialState
}
const reducer = ({taskList}, action) => ({
    taskList: taskListReducer(taskList, action)
});

export const Context = createContext({
    state: initialState,
    dispatch: () => null
});

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}
