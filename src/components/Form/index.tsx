import React from "react";
import Button from "../Button"
import style from './Form.module.scss';


class Form extends React.Component{
    state ={
        task: "",
        time: "00:00"
    }
    addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log('state:', this.state)
    }
    render(): React.ReactNode {
        return(
            <form className={style.newTask} onSubmit={ this.addTask.bind(this) }>
                <div className={style.inputContainer}>
                    <label htmlFor={style.task}>Add Your Task</label>
                    <input 
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={event => this.setState({...this.state, task: event.target.value})}
                        id="task"
                        placeholder="Type your task"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time"> Time </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        value={this.state.time}
                        onChange={event => {
                            this.setState({ ...this.state, time: event.target.value })
                        } }
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button>
                    Add
                </Button>
            </form>
        )
    }
}
export default Form