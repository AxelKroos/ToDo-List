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
} from "../actions/actionTypes";

const initialState = {
    showAddNewUser: 'block',
    showInput: false,
    usersData: [
        {
            firstName: 'Gloria',
            lastName: 'Reeves',
            zip: 67439,
            birthday: '10-18-1985',
            points: 4,
            average: 0.1,
            amount: '50$'
        },
        {
            firstName: 'Axel',
            lastName: 'Reeves',
            zip: 67439,
            birthday: '10-18-1985',
            points: 4,
            average: 0.1,
            amount: '50$'
        },
        {
            firstName: 'Mama',
            lastName: 'Reeves',
            zip: 67439,
            birthday: '10-18-1985',
            points: 4,
            average: 0.1,
            amount: '50$'
        },
        {
            firstName: 'Nata',
            lastName: 'Reeves',
            zip: 67439,
            birthday: '10-18-1985',
            points: 4,
            average: 0.1,
            amount: '50$'
        },
        {
            firstName: 'Lilu',
            lastName: 'Reeves',
            zip: 67439,
            birthday: '10-18-1985',
            points: 4,
            average: 0.1,
            amount: '50$'
        },
    ],
    currentIndex: '',
    currentValue: [],
    currentFirstName: '',
    currentLastName: '',
    currentZip: '',
    currentBirthday: '',
    currentPoints: '',
    currentAverage: '',
    currentAmount: ''
}

export default function usersData(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_USER:
            const newObj = {
                firstName: state.currentFirstName,
                lastName: state.currentLastName,
                zip: state.currentZip,
                birthday: state.currentBirthday,
                points: state.currentPoints,
                average: state.currentAverage,
                amount: state.currentAmount
            }
            return {
                ...state,
                usersData: [...state.usersData, newObj],
                showAddNewUser: false
            }
        case DELETE_USER:
            return {
                ...state,
                usersData: [...state.usersData.slice(0, action.payload),
                    ...state.usersData.slice(action.payload + 1)]
            }
        case RENAME_USER_SHOW_INPUT:
            return {
                ...state,
                showAddNewUser: 'none',
                currentValue: action.payload,
                currentIndex: action.index,
                showInput: true,
                currentFirstName: state.usersData[action.index].firstName,
                currentLastName: state.usersData[action.index].lastName,
                currentZip: state.usersData[action.index].zip,
                currentBirthday: state.usersData[action.index].birthday,
                currentPoints: state.usersData[action.index].points,
                currentAverage: state.usersData[action.index].average,
                currentAmount: state.usersData[action.index].amount
            }
        case CHANGE_FIRSTNAME:
            return {
                ...state, currentFirstName: [action.payload]
            }
        case CHANGE_LASTNAME:
            return {
                ...state, currentLastName: [action.payload]
            }
        case CHANGE_ZIP:
            return {
                ...state, currentZip: [action.payload]
            }
        case CHANGE_BIRTHDAY:
            return {
                ...state, currentBirthday: [action.payload]
            }
        case CHANGE_POINTS:
            return {
                ...state, currentPoints: [action.payload]
            }
        case CHANGE_AVERAGE:
            return {
                ...state, currentAverage: [action.payload]
            }
        case CHANGE_AMOUNT:
            return {
                ...state, currentAmount: [action.payload]
            }
        case RENAME_USER_HIDE_INPUT:
            const obj = {
                firstName: state.currentFirstName,
                lastName: state.currentLastName,
                zip: state.currentZip,
                birthday: state.currentBirthday,
                points: state.currentPoints,
                average: state.currentAverage,
                amount: state.currentAmount
            }
            return {
                ...state,
                showAddNewUser: 'block',
                usersData: [...state.usersData.slice(0, state.currentIndex), obj,
                    ...state.usersData.slice(state.currentIndex + 1)],
                currentFirstName: '',
                currentLastName: '',
                currentZip: '',
                currentBirthday: '',
                currentPoints: '',
                currentAverage: '',
                currentAmount: '',
                showInput: false
            }
        default:
            return state
    }
}