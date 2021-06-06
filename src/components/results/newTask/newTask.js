import React from "react";
import {connect} from "react-redux";
import {addNewTask, changeDate, changeTask} from "../../../store/actions/usersActions";
import classes from './newTask.module.css'

class NewTask extends React.Component {
    render() {
        return <form onSubmit={(event => this.props.addNewTask(event.preventDefault()))}
                     style={{display: this.props.show}} className={classes.newTask}>
            <input type="text" placeholder='Задача' value={this.props.task}
                   onChange={(event => this.props.changeTask(event.target.value))}/>
            <input type="date" placeholder='Дата' value={this.props.date}
                   onChange={(event => this.props.changeDate(event.target.value))}/>
            <button>Добавить задачу</button>
            {this.props.checkError ? <p className={classes.error}>Ошибка! Неправильно введены данные</p> : null}
        </form>
    }
}

function mapStateToProps(state) {
    return {
        show: state.tasksData.showAddNewTask,
        task: state.tasksData.currentTask,
        date: state.tasksData.currentDate,
        checkError: state.tasksData.checkError
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTask: (value) => {
            dispatch(changeTask(value))
        },
        changeDate: (value) => {
            dispatch(changeDate(value))
        },
        addNewTask: () => {
            dispatch(addNewTask())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTask)