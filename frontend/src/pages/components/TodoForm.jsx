import React from "react";
import { Form, Button } from "rsuite";
import Field from "../../components/field/Field";
import ToggleField from "../../components/field/ToogleField";

const TodoForm = props => {
  const { onClose, onFormSubmit, todo, handleSubmit } = props;

  return (
    <Form fluid onSubmit={handleSubmit(onFormSubmit)} noValidate>
      <Field name="title" label="Title" id="title" type="text" isRequired />
      <Field
        componentClass="textarea"
        name="description"
        label="Description"
        id="description"
        isRequired
      />
      {todo && (
        <ToggleField name="completed" id="completed" label="Completed" />
      )}

      <div className=" d-flex justify-content-end mt-3">
        <Button onClick={onClose} appearance="subtle" className="mr-2">
          Cancel
        </Button>
        <Button color="cyan" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default TodoForm;
