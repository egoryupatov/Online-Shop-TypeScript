import { Form } from "react-bootstrap";
import React from "react";

export interface PropsFormInput {
    value: string | number;
    onChange: (value: string) => void;
    label: string;
    placeholder?: string;
}

export const FormInput: React.FC<PropsFormInput> = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        placeholder={props.placeholder ? props.placeholder: 'Enter value'}
        value={props.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
      />
    </Form.Group>
  );
};
