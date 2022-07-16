import { Container, Form, Button } from "react-bootstrap";
import { addProduct } from "../store/productsSlice";
import { useAppDispatch } from "../store/hooks";
import { useState } from "react";

export const AddProduct: React.FC = () => {
  const dispatch = useAppDispatch();

  interface inputInterface {
    name: string;
    price: string;
    stock: string;
  }

  const [input, setInput] = useState<inputInterface>({
    name: "",
    price: "",
    stock: "",
  });

  const handleProductName = (event: any) => {
    setInput({ ...input, name: event.target.value });
  };

  const handleProductPrice = (event: any) => {
    setInput({ ...input, price: event.target.value });
  };

  const handleProductStock = (event: any) => {
    setInput({ ...input, stock: event.target.value });
  };

  const handleAddingProduct = (event: any) => {
    
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input),
    };

    fetch("http://localhost:3000/products/", options)
      .then((response) => {
        return response.json();
      })
      .then((input) => {
        dispatch(addProduct(input));
      });
  };

  return (
    <Container>
      <h1>Want to add a new product?</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            placeholder="Enter product name"
            value={input.name}
            onChange={handleProductName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            placeholder="Product price"
            value={input.price}
            onChange={handleProductPrice}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number in stock</Form.Label>
          <Form.Control
            placeholder="Number in stock"
            value={input.stock}
            onChange={handleProductStock}
          />
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={handleAddingProduct}>
          Add a product
        </Button>
      </Form>
    </Container>
  );
};
