import {combineReducers} from 'redux';
import { contentReducer } from './content/content.reducer';
import {settingsReducer} from './settings/settings.reducer';
import { userReducer } from './user/user.reducer';
import {supportReducer} from "./support/support.reducer";

export const rootReducer = combineReducers({
    settings: settingsReducer,
    user: userReducer,
    support: supportReducer,
    content: contentReducer
})



export type RootState = ReturnType<typeof rootReducer>
