import React from "react";
import { Field } from "redux-form";
import { FormGroup, ControlLabel, HelpBlock, Toggle } from "rsuite";

const InputComponent = ({
  label,
  input,
  name,
  meta: { touched, error },
  ...props
}) => {
  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <Toggle
        {...input}
        {...props}
        defaultChecked={input.value}
        checked={input.value}
        onChange={val => {
          input.onChange(val);
        }}
      />
      {touched[input.name] && error[input.name] && (
        <HelpBlock style={{ color: "red" }}>{error[input.name]}</HelpBlock>
      )}
    </FormGroup>
  );
};

const ToogleField = props => {
  const { label, name, placeholder } = props;
  return (
    <Field
      name={name}
      component={InputComponent}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default ToogleField;
