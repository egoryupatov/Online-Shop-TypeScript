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

//вот это заработало, но как сделать чтобы при повторном нажатии все возращалось?

  const sorted = [...products].sort((a, b) => b.price - a.price);

  const [sort, setSort] = useState(false);

  const handleSort = () => {
    setSort(true);
  };

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

          {!sort && (
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td><DeleteProduct id={product.id}/></td>
                  <td><Button variant="secondary">Edit</Button></td>
                </tr>
              ))}
            </tbody>
          )}

          {sort && (
            <tbody>
              {sorted.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td><DeleteProduct id={product.id}/></td>
                  <td><Button variant="secondary">Edit</Button></td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
        <Button onClick={handleSort}>Sort by price</Button>
      </Container>
    </div>
  );
};
