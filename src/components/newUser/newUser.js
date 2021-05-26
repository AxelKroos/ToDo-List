import React from "react";
import {connect} from "react-redux";
import {
    addNewUser, changeAmount, changeAverage,
    changeBirthday,
    changeFirstName,
    changeLastName,
    changePoints,
    changeZip
} from "../../store/actions/usersActions";

class NewUser extends React.Component {
    render() {
        return <form onSubmit={(event => this.props.addNewUser(event.preventDefault()))}
                     style={{display: this.props.show}}>
            <input type="text" placeholder='First Name' value={this.props.firstName}
                   onChange={(event => this.props.changeFirstName(event.target.value))}/>
            <input type="text" placeholder='Last Name' value={this.props.lastName}
                   onChange={(event => this.props.changeLastName(event.target.value))}/>
            <input type="text" placeholder='Zip' value={this.props.zip}
                   onChange={(event => this.props.changeZip(event.target.value))}/>
            <input type="date" placeholder='Birthday' value={this.props.birthday}
                   onChange={(event => this.props.changeBirthday(event.target.value))}/>
            <input type="text" placeholder='Points' value={this.props.points}
                   onChange={(event => this.props.changePoints(event.target.value))}/>
            <input type="text" placeholder='Average' value={this.props.average}
                   onChange={(event => this.props.changeAverage(event.target.value))}/>
            <input type="text" placeholder='Amount' value={this.props.amount}
                   onChange={(event => this.props.changeAmount(event.target.value))}/>
            <button>Add User</button>
        </form>
    }
}

function mapStateToProps(state) {
    return {
        show: state.usersData.showAddNewUser,
        firstName: state.usersData.currentFirstName,
        lastName: state.usersData.currentLastName,
        zip: state.usersData.currentZip,
        birthday: state.usersData.currentBirthday,
        points: state.usersData.currentPoints,
        average: state.usersData.currentAverage,
        amount: state.usersData.currentAmount
    }
}

function mapDispatchToProps(dispatch) {
    return {
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
        },
        addNewUser: () => {
            dispatch(addNewUser())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)