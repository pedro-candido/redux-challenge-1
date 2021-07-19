
const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

export const incrementarTempo = () =>{
    return {type: INCREMENTAR_TEMPO};
}

export const reduzirTempo = () =>{
    return {type: REDUZIR_TEMPO};
}

export const modificarEmail = (email) =>{
    return {
        type: MODIFICAR_EMAIL, payload: email
    }
}

const initialState = {
        name: 'Pedro',
        email: 'pedro@t.com',
        tempoRestante: 100
    }


const alunoReducer = immer.produce((state, action ) =>{
    switch(action.type) {
        case INCREMENTAR_TEMPO:
            state.tempoRestante++;
            break;
        case REDUZIR_TEMPO:
            state.tempoRestante--;
            break;
        case MODIFICAR_EMAIL:
            state.email = action.payload;
            break;
        default:
            return state;
    }
}, initialState);

export default alunoReducer