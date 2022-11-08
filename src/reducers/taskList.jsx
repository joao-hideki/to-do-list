import {v4 as uuidv4} from 'uuid';

export const taskListInitialState = [];
export const taskListReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            if(action.payload.task){
                const newState = [...state];
                    newState.push({
                    id: uuidv4(),
                    task: action.payload.task,
                    done: false
                });
                return newState;
            } else {
                alert('preencha o campo');
                break;
            }
        case 'DEL_TASK':
            if(action.payload.id) {
                let newState = [...state];
                newState = newState.filter((item) => item.id != action.payload.id); 
                return newState;               
            }
        break;
        case 'DONE_TASK':
            let item = state.find(item => item.id == action.payload.id);
            item.done = !item.done;
        break;
        case 'EDIT_TASK':
            let editItem = state.find(editItem => editItem.id == action.payload.id);
            editItem.task = action.payload.newTask;
    }
    return state;
}  