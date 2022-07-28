import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FormInput } from "../../kit/FormInput";

interface EditProductProps {
  label: string;
  productName: string;
  productPrice: string;
  productStock: string;
  heading?: string;
  onProductNameChange: (value: string) => void;
  onProductPriceChange: (value: string) => void;
  onProductStockChange: (value: string) => void;
  onSubmit: () => void;
}

export const EditProduct: React.FC<EditProductProps> = (props) => {
  return (
    <Container>
      <h1>You're editing product - {props.heading}</h1>
      <Form>
        <FormInput
          label={"Change the product name"}
          value={props.productName}
          onChange={props.onProductNameChange}
        />
        <FormInput
          label={"Change the product price"}
          value={props.productPrice}
          onChange={props.onProductPriceChange}
        />
        <FormInput
          label={"Change the number in stock"}
          value={props.productStock}
          onChange={props.onProductStockChange}
        />

        <Button variant="secondary" onClick={props.onSubmit}>
          Submit your edits
        </Button>
      </Form>
    </Container>
  );
};
