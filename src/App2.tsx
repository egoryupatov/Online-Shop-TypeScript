import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { getProducts } from "./store/productsSlice";
import { DeleteProduct } from "./features/DeleteProduct";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(getProducts(data));
      });
  }, []);

  const products = useAppSelector((state) => state.products.list);

  const [sort, setSort] = useState(false);

  const handleSort = () => {
    setSort(true);
  }

  return (
    <div className="App">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          
          
          
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>

                {!sort && <td>${product.price}</td>}
                {sort && <td>Отсортировано</td>}

                <td>{product.stock}</td>
                <td>
                  <Button variant="secondary">Delete</Button>
                </td>
                <td>
                  <Button variant="secondary">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>


          
        </Table>
        <Button onClick={handleSort}>Sort by price</Button>
      </Container>
    </div>
  );
};
