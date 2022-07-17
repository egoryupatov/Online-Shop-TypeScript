import { useParams } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export const EditProduct: React.FC = () => {

const params = useParams();

return (
  
<Container>
      <h1>You're editing the product </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            placeholder="Enter product name"
  
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Product price</Form.Label>
          <Form.Control
            placeholder="Product price"
         
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number in stock</Form.Label>
          <Form.Control
            placeholder="Number in stock"
        
          />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Add a product
        </Button>
      </Form>
    </Container>

  
  
  )
};
