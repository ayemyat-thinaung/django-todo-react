import React, { useEffect } from "react";
import { getTodos } from "../service/todo/todoAction";
import { connect } from "react-redux";
import Loading from "../components/loading/Loading";
import TodoPanel from "./components/TodoPanel";
import TodoActionBar from "./components/TodoActionBar";

const TodoPage = props => {
  useEffect(() => {
    const getAllTodos = props.getTodos;
    getAllTodos();
  }, [props.getTodos]);

  const { isPending, todos } = props;

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <>
          <div className="d-flex justify-content-between m-3">
            <div>
              <h3 className="text-muted">ToDo Lists</h3>
            </div>
            <TodoActionBar />
          </div>
          <TodoPanel todos={todos} />
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ todos }) => ({
  isPending: todos.isPending,
  todos: todos.data
});
export default connect(mapStateToProps, { getTodos })(TodoPage);
