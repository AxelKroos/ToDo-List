import {
    DELETE_TASK,
    RENAME_TASK_SHOW_INPUT,
    RENAME_TASK_HIDE_INPUT,
    CHANGE_TASK,
    CHANGE_DATE,
    ADD_NEW_TASK,
    TASK_STATUS,
    SORT_TUSKS
} from "../actions/actionTypes";

const initialState = {
    showAddNewTask: 'block',
    showInput: false,
    tasksData: [
        {
            task: 'Помыть посуду',
            date: '10-18-2020',
            taskStatus: true
        },
        {
            task: 'Пропылесосить',
            date: '10-18-2021',
            taskStatus: false
        }
    ],
    currentIndex: '',
    currentTask: '',
    currentDate: '',
    filteredArr: [],
    checkFilter: false,
    checkError: false
}

export default function tasksData(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_TASK:
            if (state.currentTask.length >= 20 || state.currentTask.length <= 0 || state.currentDate.length <= 0) {
                return {
                    ...state,
                    checkError: true
                }
            } else {
                const newObj = {
                    task: state.currentTask,
                    date: state.currentDate,
                    taskStatus: false
                }
                return {
                    ...state,
                    tasksData: [...state.tasksData, newObj],
                    filteredArr: [...state.filteredArr, newObj],
                    showAddNewTask: false,
                    checkError: false
                }
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksData: [...state.tasksData.slice(0, action.payload),
                    ...state.tasksData.slice(action.payload + 1)],
                filteredArr: [...state.filteredArr.slice(0, action.payload),
                    ...state.filteredArr.slice(action.payload + 1)]
            }
        case RENAME_TASK_SHOW_INPUT:

            return {
                ...state,
                showAddNewTask: 'none',
                showInput: true,
                currentTask: state.tasksData[action.index].task,
                currentDate: state.tasksData[action.index].date,
                currentIndex: action.index
            }
        case CHANGE_TASK:
            return {
                ...state, currentTask: action.payload
            }
        case CHANGE_DATE:
            return {
                ...state, currentDate: action.payload
            }
        case RENAME_TASK_HIDE_INPUT:
            let obj
            if (state.checkFilter == true) {
                obj = {
                    task: state.currentTask,
                    date: state.currentDate,
                    taskStatus: state.filteredArr[state.currentIndex].taskStatus
                }
            } else {
                obj = {
                    task: state.currentTask,
                    date: state.currentDate,
                    taskStatus: state.tasksData[state.currentIndex].taskStatus
                }
            }
            return {
                ...state,
                showAddNewTask: 'block',
                tasksData: [...state.tasksData.slice(0, state.currentIndex), obj,
                    ...state.tasksData.slice(state.currentIndex + 1)],
                filteredArr: [...state.filteredArr.slice(0, state.currentIndex), obj,
                    ...state.filteredArr.slice(state.currentIndex + 1)],
                currentTask: '',
                currentDate: '',
                showInput: false
            }
        case TASK_STATUS:
            const newObj = {
                task: state.tasksData[action.payload].task,
                date: state.tasksData[action.payload].date,
                taskStatus: !state.tasksData[action.payload].taskStatus
            }
            return {
                ...state,
                tasksData: [...state.tasksData.slice(0, action.payload), newObj,
                    ...state.tasksData.slice(action.payload + 1)],
                filteredArr: [...state.filteredArr.slice(0, action.payload), newObj,
                    ...state.filteredArr.slice(action.payload + 1)]
            }
        case SORT_TUSKS:
            let arr = []
            let newArr = []
            for (let i = 0; i < state.tasksData.length; i++) {
                arr.push({value: state.tasksData[i], taskStatus: state.tasksData[i].taskStatus})
            }
            if (action.payload == 1) {
                newArr = [...state.tasksData]
            } else if (action.payload == 2) {
                for (let k = 0; k < arr.length; k++) {
                    {
                        arr[k].taskStatus ? newArr.push(arr[k].value) : newArr = newArr
                    }
                }
            } else if (action.payload == 3) {
                for (let k = 0; k < arr.length; k++) {
                    {
                        arr[k].taskStatus ? newArr = newArr : newArr.push(arr[k].value)
                    }
                }
            }
            return {
                ...state,
                filteredArr: newArr,
                checkFilter: true
            }
        default:
            return state
    }
}