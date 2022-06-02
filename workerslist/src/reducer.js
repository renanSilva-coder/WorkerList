export function workerReducer(state, action){
    switch(action.type){
        default:
            return state;
    }
}

export function queueReducer(state, action){
    switch(action.type){
        case 'ADD_QUEUE':
            if(state.includes(action.payload.trabalhador))
                return state;
            return [...state, action.payload.trabalhador];
        case 'REMOVE_QUEUE':
            return state.filter((worker) => worker.id !== action.payload.trabalhador.id);

        default:
            return state;
    }
}