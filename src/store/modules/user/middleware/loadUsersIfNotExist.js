import { startLoadingUsers, finishLoadingUsers, failLoadingUsers, USER_ACTIONS } from "../actions";
import { selectUserIds } from '../selectors'
import { normalizer } from '../../../utils/normalizer'

export const loadUsersIfNotExist = (store) => (next) => (action) => {
    if (action?.type !== USER_ACTIONS.load) {
        console.log('action:', action);
        return next(action);
    }

    const state = store.getState();

    if (selectUserIds(state)?.length) {
        return;
    }

    store.dispatch(startLoadingUsers());
    fetch('http://localhost:3001/api/users/')
        .then(response => response.json())
        .then(users => {
            store.dispatch(finishLoadingUsers(normalizer(users)));
        }).catch(() => {
            store.dispatch(failLoadingUsers());
        })
}