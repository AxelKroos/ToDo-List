import React from "react";
import classes from './filter.module.css'

class Filter extends React.Component {
    render() {
        return <div className={classes.formRadio}>
            <div className={classes.formRadio}>
                <h4>Показать:</h4>
            </div>
            <div className={classes.formRadio}>
                <input id="radio-1" type="radio" name="radio" value="1"
                       onClick={(event => this.props.sortTusks(event.target.value))}/>
                <label htmlFor="radio-1">Все</label>
            </div>
            <div className={classes.formRadio}>
                <input id="radio-2" type="radio" name="radio" value="2"
                       onClick={(event => this.props.sortTusks(event.target.value))}/>
                <label htmlFor="radio-2">Выполненные</label>
            </div>
            <div className={classes.formRadio}>
                <input id="radio-3" type="radio" name="radio" value="3"
                       onClick={(event => this.props.sortTusks(event.target.value))}/>
                <label htmlFor="radio-3">Текущие</label>
            </div>
        </div>
    }
}

export default Filter