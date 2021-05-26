import {
    DELETE_USER,
    RENAME_USER_SHOW_INPUT,
    RENAME_USER_HIDE_INPUT,
    CHANGE_FIRSTNAME,
    CHANGE_LASTNAME,
    CHANGE_ZIP,
    CHANGE_BIRTHDAY,
    CHANGE_POINTS,
    CHANGE_AVERAGE,
    CHANGE_AMOUNT,
    ADD_NEW_USER
} from "./actionTypes";

export function deleteUser(index) {
    return {
        type: 'DELETE_USER',
        payload: index
    }
}

export function renameUserShowInput(user, index) {
    return {
        type: 'RENAME_USER_SHOW_INPUT',
        user: user,
        index: index
    }
}

export function renameUserHideInput() {
    return {
        type: 'RENAME_USER_HIDE_INPUT'
    }
}

export function changeFirstName(value) {
    return {
        type: 'CHANGE_FIRSTNAME',
        payload: value
    }
}

export function changeLastName(value) {
    return {
        type: 'CHANGE_LASTNAME',
        payload: value
    }
}

export function changeZip(value) {
    return {
        type: 'CHANGE_ZIP',
        payload: value
    }
}

export function changeBirthday(value) {
    return {
        type: 'CHANGE_BIRTHDAY',
        payload: value
    }
}

export function changePoints(value) {
    return {
        type: 'CHANGE_POINTS',
        payload: value
    }
}

export function changeAverage(value) {
    return {
        type: 'CHANGE_AVERAGE',
        payload: value
    }
}

export function changeAmount(value) {
    return {
        type: 'CHANGE_AMOUNT',
        payload: value
    }
}

export function addNewUser(value) {
    return {
        type: 'ADD_NEW_USER',
        payload: value
    }
}
