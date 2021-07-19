import store from './store/configureStore.store.js';
import { modificarEmail, incrementarTempo, reduzirTempo } from './reducers/aluno.reducer.js';
import { completarAula, completarCurso, resetarCurso } from './reducers/aula.reducer.js';

const {aulas, aluno} = store.getState();


function render() {
    const { aluno, aulas } = store.getState();
    const aulasEl = document.getElementById('aulas');
    const alunoEl = document.getElementById('aluno');

    alunoEl.innerText = `${aluno.name} : ${aluno.email} : ${aluno.tempoRestante}`;
    aulasEl.innerText = aulas.filter((aula) => aula.completa === true).length;
  }
  render();

  store.subscribe(render)

  store.dispatch(incrementarTempo());
  store.dispatch(incrementarTempo());
  store.dispatch(reduzirTempo());
  store.dispatch(modificarEmail('joao@origamid.com'));
  store.dispatch(completarAula(2));
  store.dispatch(completarAula(3));
  store.dispatch(completarAula(4));
  store.dispatch(resetarCurso());
  store.dispatch(completarCurso());