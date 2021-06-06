export function deleteTask(index) {
    return {
        type: 'DELETE_TASK',
        payload: index
    }
}

export function renameTaskShowInput(user, index) {
    return {
        type: 'RENAME_TASK_SHOW_INPUT',
        user: user,
        index: index
    }
}

export function renameTaskHideInput(index) {
    return {
        type: 'RENAME_TASK_HIDE_INPUT',
        payload: index
    }
}

export function changeTask(value) {
    return {
        type: 'CHANGE_TASK',
        payload: value
    }
}

export function changeDate(value) {
    return {
        type: 'CHANGE_DATE',
        payload: value
    }
}

export function addNewTask() {
    return {
        type: 'ADD_NEW_TASK'
    }
}

export function taskStatus(index) {
    return {
        type: 'TASK_STATUS',
        payload: index
    }
}

export function sortTusks(value) {
    return {
        type: 'SORT_TUSKS',
        payload: value
    }
}
