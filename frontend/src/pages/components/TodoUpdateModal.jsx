import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { updateTodo, getTodos } from "../../service/todo/todoAction";
import TodoForm from "./TodoForm";

const formName = "TodoUpdateForm";

const TodoUpdateModal = props => {
  const { isShow, onClose, initialValues } = props;

  const onFormSubmit = data => {
    props.updateTodo(data.id, data, () => {
      props.getTodos();
      onClose();
      props.reset();
    });
  };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Edit ToDo List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm
          onClose={onClose}
          onFormSubmit={onFormSubmit}
          todo={initialValues}
          {...props}
        />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, { updateTodo, getTodos })(
  reduxForm({ form: formName, enableReinitialize: true })(TodoUpdateModal)
);
