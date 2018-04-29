import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as tasks } from './modules/tasks/tasks';

const rootReducer = combineReducers({
  tasks,
});

export default createStore(rootReducer, composeWithDevTools(

));