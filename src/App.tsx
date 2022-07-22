import { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { getProducts } from "./store/productsSlice";
import { SortedList } from "./features/SortedList";

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

  const handleSort = () => {
    setSort((prevSort) => !prevSort);
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

          {!sort && <SortedList products={products} />}
          {sort && <SortedList products={sortedUp} />}
        </Table>
        <Button variant="secondary" onClick={handleSort}>
          Sort by price
        </Button>
      </Container>
    </div>
  );
};
