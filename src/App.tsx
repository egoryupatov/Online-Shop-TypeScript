import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { getProductsAction } from "./store/productsSlice";
import { SortedList } from "./features/SortedList";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.list);

  const sortedUp = [...products].sort((a, b) => Number(b.price) - Number(a.price));

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
