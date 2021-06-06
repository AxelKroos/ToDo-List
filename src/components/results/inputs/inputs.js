import React from "react";
import {connect} from "react-redux";
import {renameTaskHideInput, changeTask,changeDate} from "../../../store/actions/usersActions";
import classes from './inputs.module.css'

class Inputs extends React.Component {
    render() {
        const inputs = <tr>
            <th><input type="text" value={this.props.task}
                       onChange={(event => this.props.changeTask(event.target.value))}/></th>
            <th><input type="date" value={this.props.date}
                       onChange={(event => this.props.changeDate(event.target.value))}/></th>
            <div>
                <button onClick={() => this.props.renameTaskHideInput()}>Применить</button>
            </div>
        </tr>

        return <div className={classes.inputs}>
            <thead>
            <tr>
                <th>Задача</th>
                <th>Дата</th>
            </tr>
            </thead>
            <tbody>{inputs}</tbody>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        task: state.tasksData.task,
        date: state.tasksData.currentDate,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renameTaskHideInput: () => {
            dispatch(renameTaskHideInput())
        },
        changeTask: (value) => {
            dispatch(changeTask(value))
        },
        changeDate: (value) => {
            dispatch(changeDate(value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)
