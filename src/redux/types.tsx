import { ContentActionTypes, ContentState } from './content/content.constants';
import {SettingsState, SettingsActionTypes} from './settings/settings.constants';
import { UserActionTypes, UserState } from './user/user.constants';
import {SupportState} from "./support/support constants";


export interface RootState {
    settings: SettingsState,
    user: UserState,
    content: ContentState,
    support: SupportState
}


export type RootAction = SettingsActionTypes | UserActionTypes | ContentActionTypes |any
