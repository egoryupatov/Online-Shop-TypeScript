import { Container, Form, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "./../store/hooks";
import { editProduct } from "../store/productsSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface inputInterface {

  name: string;
  price: string;
  stock: string;

}

export const EditProduct: React.FC = () => {

  const dispatch = useAppDispatch();
  const params = useParams();  

  const products = useAppSelector((state) => state.products.list);
  const editedProduct = products.find((product) => product.id == Number(params.id));

  const [input, setInput] = useState<inputInterface>({
    name: "",
    price: "",
    stock: "",
  });

  const handleNameEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, name: event.target.value });
  };

  const handlePriceEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, price: event.target.value });
  };

  const handleStockEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, stock: event.target.value });
  };

  const handleEdit = () => {

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };

    fetch(`http://localhost:3000/products/${params.id}`, options)
      .then((response) => {
        return response.json();
      })
      .then((input) => {
        dispatch(editProduct(input));
      });
  };

  return (
    <Container>
      <h1>You're editing the product </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            placeholder="Enter product name"
            value={input.name}
            onChange={handleNameEdit}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            placeholder="Product price"
            value={input.price}
            onChange={handlePriceEdit}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number in stock</Form.Label>
          <Form.Control
            placeholder="Number in stock"
            value={input.stock}
            onChange={handleStockEdit}
          />
        </Form.Group>

        <Button variant="secondary" type="submit" onClick={handleEdit}>
          Submit edits
        </Button>
      </Form>
    </Container>
  );
};
