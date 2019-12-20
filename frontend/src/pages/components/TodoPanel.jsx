import React, { useState } from "react";
import { Panel, Badge, Icon } from "rsuite";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";
import { deleteTodo, getTodos } from "../../service/todo/todoAction";
import DeleteModal from "../../components/modal/DeleteModal";
import TodoUpdateModal from "./TodoUpdateModal";

const TodoPanel = props => {
  const { todos } = props;

  const [isOpenTodoUpdate, setIsOpenTodoUpdate] = useState(false);
  const [isOpenTodoDelete, setIsOpenTodoDelete] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  return (
    <div>
      {_.map(todos, todo => {
        return (
          <div
            className="d-flex justify-content-between"
            key={todo.id}
            style={{ width: "600px" }}
          >
            <Panel
              header={
                <>
                  {todo.title}
                  {todo && todo.completed === true && (
                    <Badge
                      style={{ background: "#4caf50" }}
                      className="ml-2 p-1"
                      content="completed"
                    />
                  )}
                </>
              }
              collapsible
              bordered
              className="mx-5 my-2"
              style={{ width: "400px" }}
            >
              <p>
                {todo.description}
                <br />
                {moment(todo.todoDate).format("lll")}
              </p>
            </Panel>
            <div>
              <Icon
                icon="edit"
                className="mr-3"
                onClick={() => {
                  setIsOpenTodoUpdate(true);
                  setSelectedTodo(todo);
                }}
              />
              <Icon
                icon="trash"
                className="mr-5"
                onClick={() => {
                  setIsOpenTodoDelete(true);
                  setSelectedTodo(todo);
                }}
              />
            </div>
          </div>
        );
      })}
      <DeleteModal
        isShow={isOpenTodoDelete}
        onClose={() => setIsOpenTodoDelete(false)}
        onDelete={() =>
          props.deleteTodo(selectedTodo.id, () => props.getTodos())
        }
      />
      <TodoUpdateModal
        isShow={isOpenTodoUpdate}
        initialValues={selectedTodo}
        onClose={() => setIsOpenTodoUpdate(false)}
      />
    </div>
  );
};

export default connect(null, { deleteTodo, getTodos })(TodoPanel);
