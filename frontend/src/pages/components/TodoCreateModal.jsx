import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { createTodo, getTodos } from "../../service/todo/todoAction";
import TodoForm from "./TodoForm";

const formName = "TodoCreateForm";

const TodoCreateModal = props => {
  const { isShow, onClose } = props;

  const onFormSubmit = data => {
    const parsedData = {
      ...data,
      completed: false
    };
    props.createTodo(parsedData, () => {
      props.getTodos();
      onClose();
      props.reset();
    });
  };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Add ToDo List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm onClose={onClose} onFormSubmit={onFormSubmit} {...props} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { createTodo, getTodos })(
  reduxForm({ form: formName })(TodoCreateModal)
);
