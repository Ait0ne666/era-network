import { ContentActionTypes, ContentState } from './content/content.constants';
import {SettingsState, SettingsActionTypes} from './settings/settings.constants';
import { UserActionTypes, UserState } from './user/user.constants';


export interface RootState {
    settings: SettingsState,
    user: UserState,
    content: ContentState
}


export type RootAction = SettingsActionTypes | UserActionTypes | ContentActionTypes |any