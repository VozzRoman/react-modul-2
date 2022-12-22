
import React, { Component } from "react";

class ToDoEditor extends Component {
    state = {
        message: '',
    }

    render() {
        return (
            <form className="todo__form">
                <textarea value={this.state.message} onChange={this.handleOnchange}></textarea>
            </form>
        )
    }
}

export default ToDoEditor;
