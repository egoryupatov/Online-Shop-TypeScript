import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FormInput } from "../../kit/FormInput";

interface EditProductProps {
  label: string;
  productName: string;
  productPrice: string;
  productStock: string;
  onProductNameChange: (value: string) => void;
  onProductPriceChange: (value: string) => void;
  onProductStockChange: (value: string) => void;
  onSubmit: () => void;
}

export const EditProduct: React.FC<EditProductProps> = (props) => {
  return (
    <Container>
      <h1>You're editing product {props.productName}</h1>
      <Form>
        <FormInput
          label={"Enter the product name"}
          value={props.productName}
          onChange={props.onProductNameChange}
        />
        <FormInput
          label={"Enter the product price"}
          value={props.productPrice}
          onChange={props.onProductPriceChange}
        />
        <FormInput
          label={"Enter the number in stock"}
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
