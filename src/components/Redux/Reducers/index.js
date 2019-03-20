import { combineReducers } from 'redux';
import HeadlineReducer from './Headline/Headline'

export const rootReducer = combineReducers({
    headline: HeadlineReducer
})