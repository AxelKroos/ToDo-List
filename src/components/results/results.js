import React from "react";
import {connect} from "react-redux";
import {deleteUser, renameUserShowInput} from "../../store/actions/usersActions";

class Results extends React.Component {
    render() {

        const user = this.props.users.map((user, index) => {
            return <tr>
                <th>{user.firstName}</th>
                <th>{user.lastName}</th>
                <th>{user.zip}</th>
                <th>{user.birthday}</th>
                <th>{user.points}</th>
                <th>{user.average}</th>
                <th>{user.amount}</th>
                <button onClick={() => this.props.renameUserShowInput(user, index)}>Change</button>
                <button onClick={() => this.props.deleteUser(index)}>Delete</button>
            </tr>
        })

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
            <tbody>{user}</tbody>
        </div>

    }
}

function mapStateToProps(state) {
    return {
        users: state.usersData.usersData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        renameUserShowInput: (user, index) => {
            dispatch(renameUserShowInput(user, index))
        },
        deleteUser: (index) => {
            dispatch(deleteUser(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)