import React from "react";
import { connect } from "react-redux";
import { Button, Icon } from "rsuite";
// import { createTodo } from "../../service/todo/todoAction";
import TodoCreateModal from "./TodoCreateModal";

class TodoActionBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="d-flex justify-content-start my-3 mr-3">
        <Button appearance="primary" onClick={this.toggle}>
          <Icon icon="plus" className="mr-2" />
          Add Todo
        </Button>
        <TodoCreateModal isShow={isOpen} onClose={this.toggle} />
      </div>
    );
  }
}

export default connect(null, null)(TodoActionBar);
