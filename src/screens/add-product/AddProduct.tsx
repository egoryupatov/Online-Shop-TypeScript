import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FormInput } from "../../kit/FormInput";

interface AddProductProps {
  label: string;
  productName: string;
  productPrice: string;
  productStock: string;
  onProductNameChange: (value: string) => void;
  onProductPriceChange: (value: string) => void;
  onProductStockChange: (value: string) => void;
  onSubmit: () => void;
}

export const AddProduct: React.FC<AddProductProps> = (props) => {
  return (
    <Container>
      <h1>Want to add a new product?</h1>
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
          Add a product
        </Button>
      </Form>
    </Container>
  );
};
