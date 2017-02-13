/**
 * Created by kei on 13/2/17.
 */
import { combineReducers } from 'redux';


import * as api from './api.reducer';

export default combineReducers({...api});
