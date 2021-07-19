import alunoReducer from "../reducers/aluno.reducer.js";
import aulaReducer from "../reducers/aula.reducer.js";

const reducer = Redux.combineReducers({aulas: aulaReducer, aluno: alunoReducer}); 

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;