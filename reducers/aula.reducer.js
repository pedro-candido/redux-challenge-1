const COMPLETAR_AULA = 'aula/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aula/COMPLETAR_CURSO';
const RESETAR_CURSO= 'aula/RESETAR_CURSO';

const completarAula = () => {
    return {type: COMPLETAR_AULA};
}

const completarCurso = () => {
    return {type: COMPLETAR_CURSO};
}

const resetarCurso = () => {
    return {type: RESETAR_CURSO};
}