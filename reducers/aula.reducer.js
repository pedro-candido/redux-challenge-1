const COMPLETAR_AULA = 'aula/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aula/COMPLETAR_CURSO';
const RESETAR_CURSO= 'aula/RESETAR_CURSO';

export const completarAula = (id) => {
    return {type: COMPLETAR_AULA, payload: id};
}

export const completarCurso = () => {
    return {type: COMPLETAR_CURSO};
}

export const resetarCurso = () => {
    return {type: RESETAR_CURSO};
}

const initialState = [
    {
        id: 1,
        isComplete: false,
        name: 'HTML'
    },
    {
        id: 2,
        isComplete: false,
        name: 'CSS'
    },
    {
        id: 3,
        isComplete: false,
        name: 'JS'
    }
]

const aulaReducer = immer.produce(( state, action ) => {
    switch(action.type) {
        case COMPLETAR_AULA:
            const index = state.findIndex((item) =>{
                item.id === action.payload;
            })
            if(!isNaN(index) && state[index]) 
                state[index].isComplete = true;
            break;
        case COMPLETAR_CURSO:
            state.forEach(item =>{
                item.isComplete = true;
            })
            break;
        case RESETAR_CURSO:
            state.forEach(item =>{
                item.isComplete = false;
            })
    }
}, initialState);

export default aulaReducer;