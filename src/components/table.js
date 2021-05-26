import React from 'react'
import classes from './table.module.css'
import Inputs from "./inputs/inputs";
import Results from "./results/results";
import NewUser from "./newUser/newUser";
import {connect} from "react-redux";

class Table extends React.Component {

    render() {
        return (
            <div>
                <NewUser/>
                <table className={classes.table}>
                    {this.props.show ? <Inputs/> : null}
                    <Results/>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showAddNewUser: state.usersData.showAddNewUser,
        show: state.usersData.showInput
    }
}

export default connect(mapStateToProps)(Table)