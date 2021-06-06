import React from "react";
import {connect} from "react-redux";
import {deleteTask, renameTaskShowInput, taskStatus, sortTusks} from "../../store/actions/usersActions";
import classes from './results.module.css'
import Inputs from "./inputs/inputs";
import NewTask from "./newTask/newTask";
import Filter from "./filter/filter";

class Results extends React.Component {

    render(props) {
        let counter = 0
        let array = this.props.checkFilter ? this.props.filteredArr : this.props.tasks
        let task
        task = array.map((task, index) => {
                let taskStatus
                {task.taskStatus ? taskStatus = <p className={classes.done}>Выполнено</p> : taskStatus =
                        <p className={classes.failed}>Не выполнено</p>}
                {task.taskStatus ? counter += 1 : counter = counter}

                return <tr>
                    <th>{index + 1}</th>
                    <th onClick={() => this.props.taskStatus(index)} className={classes.taskName}>{task.task}</th>
                    <th>{task.date}</th>
                    <th>{taskStatus}</th>
                    <th className={classes.buttons}>
                        <a className={`${classes.btn} ${classes.btnChange}`}
                           onClick={() => this.props.renameTaskShowInput(task, index)}>Редактировать</a>
                        <a className={`${classes.btn} ${classes.btnDelete}`}
                           onClick={() => this.props.deleteTask(index)}>Удалить</a>
                    </th>
                </tr>
            })

        return <div>
            {counter != 0 ? <p className={classes.counterTitle}>Выполнено задач: {counter}</p> :
                <p className={classes.counterTitle}>Нет выполненных задач</p>}
            {this.props.show ? <Inputs/> : <NewTask/>}
            <Filter sortTusks={this.props.sortTusks}/>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Задача</th>
                    <th>Дата</th>
                    <th>Статус</th>
                </tr>
                </thead>
                <tbody>{task}</tbody>
            </table>
        </div>


    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasksData.tasksData,
        filteredArr: state.tasksData.filteredArr,
        checkFilter: state.tasksData.checkFilter,
        show: state.tasksData.showInput
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renameTaskShowInput: (user, index) => dispatch(renameTaskShowInput(user, index)),
        deleteTask: (index) => dispatch(deleteTask(index)),
        taskStatus: (index) => dispatch(taskStatus(index)),
        sortTusks: (value) => dispatch(sortTusks(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)