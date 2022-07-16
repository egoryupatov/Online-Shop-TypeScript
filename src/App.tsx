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

   const sortedUp = [...products].sort((a, b) => b.price - a.price);

  const [sort, setSort] = useState(false);

  //не понимаю приставку prev, я понимаю что это переводится как предыдущий (previous) но что это, ключевое слово?

  const handleSort = () => {

    setSort(prevSort => !prevSort);

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
              {sortedUp.map((product) => (
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
        <Button variant="secondary" onClick={handleSort}>Sort by price</Button>
      </Container>
    </div>
  );
};
