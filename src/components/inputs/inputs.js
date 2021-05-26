import React from "react";
import {connect} from "react-redux";
import classes from "../table.module.css";
import {
    renameUserHideInput,
    changeFirstName,
    changeLastName,
    changeZip,
    changeBirthday,
    changePoints,
    changeAverage,
    changeAmount
} from "../../store/actions/usersActions";

class Inputs extends React.Component {
    render() {
        const inputs = <tr>
            <th><input type="text" value={this.props.firstName}
                       onChange={(event => this.props.changeFirstName(event.target.value))}/></th>
            <th><input type="text" value={this.props.lastName}
                       onChange={(event => this.props.changeLastName(event.target.value))}/></th>
            <th><input type="text" value={this.props.zip}
                       onChange={(event => this.props.changeZip(event.target.value))}/></th>
            <th><input type="date" value={this.props.birthday}
                       onChange={(event => this.props.changeBirthday(event.target.value))}/></th>
            <th><input type="text" value={this.props.points}
                       onChange={(event => this.props.changePoints(event.target.value))}/></th>
            <th><input type="text" value={this.props.average}
                       onChange={(event => this.props.changeAverage(event.target.value))}/></th>
            <th><input type="text" value={this.props.amount}
                       onChange={(event => this.props.changeAmount(event.target.value))}/></th>
            <div className={classes.buttons}>
                <button onClick={() => this.props.renameUserHideInput()}>Apply</button>
            </div>
        </tr>

        return <div>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ZIP</th>
                <th>Birthday</th>
                <th>Points</th>
                <th>Average</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>{inputs}</tbody>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        firstName: state.usersData.currentFirstName,
        lastName: state.usersData.currentLastName,
        zip: state.usersData.currentZip,
        birthday: state.usersData.currentBirthday,
        points: state.usersData.currentPoints,
        average: state.usersData.currentAverage,
        amount: state.usersData.currentAmount,
        currentValue: state.usersData.currentValue
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renameUserHideInput: () => {
            dispatch(renameUserHideInput())
        },
        changeFirstName: (value) => {
            dispatch(changeFirstName(value))
        },
        changeLastName: (value) => {
            dispatch(changeLastName(value))
        },
        changeZip: (value) => {
            dispatch(changeZip(value))
        },
        changeBirthday: (value) => {
            dispatch(changeBirthday(value))
        },
        changePoints: (value) => {
            dispatch(changePoints(value))
        },
        changeAverage: (value) => {
            dispatch(changeAverage(value))
        },
        changeAmount: (value) => {
            dispatch(changeAmount(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs)
