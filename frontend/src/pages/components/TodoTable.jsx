import React, { useState } from "react";
import { Table, Icon, IconButton, Badge } from "rsuite";
import _ from "lodash";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../../service/todo/todoAction";
import TodoUpdateModal from "./TodoUpdateModal";
import DeleteModal from "../../components/modal/DeleteModal";

const { Column, HeaderCell, Cell } = Table;
const BookTable = props => {
  const { todos } = props;
  console.log("todos", todos);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <Table height={400} data={_.map(todos)}>
        <Column width={250} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={200} fixed>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title" />
        </Column>
        <Column width={200}>
          <HeaderCell>Description</HeaderCell>
          <Cell dataKey="description" />
        </Column>
        <Column width={150}>
          <HeaderCell>Complete</HeaderCell>
          <Cell>
            {rowData =>
              rowData.completed === true ? (
                <Badge content="true" style={{ backgroundColor: "blue" }} />
              ) : (
                <Badge content="false" style={{ backgroundColor: "red" }} />
              )
            }
          </Cell>
        </Column>
        <Column fixed="right" width={150}>
          <HeaderCell>Options</HeaderCell>
          <Cell>
            {rowData => (
              <>
                <IconButton
                  icon={<Icon icon="edit" />}
                  className="mr-4"
                  appearance="ghost"
                  size="xs"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setIsOpenUpdateModal(true);
                    setSelectedItem(rowData);
                  }}
                />
                <IconButton
                  style={{ cursor: "pointer" }}
                  icon={<Icon icon="trash" className="text-danger" />}
                  appearance="ghost"
                  color="red"
                  size="xs"
                  onClick={() => {
                    setIsOpenDeleteModal(true);
                    setSelectedItem(rowData);
                  }}
                />
              </>
            )}
          </Cell>
        </Column>
      </Table>
      <TodoUpdateModal
        initialValues={selectedItem}
        isShow={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
      />
      <DeleteModal
        isShow={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={() => props.deleteTodo(selectedItem.id)}
      />
    </>
  );
};
export default connect(null, { getTodos, deleteTodo })(BookTable);
