import { useAppDispatch } from "../store/hooks";
import { removeProductAction } from "../store/productsSlice";
import { Button } from "react-bootstrap";
import React from "react";

interface DeleteProductProps {
  id: number;
}

export const DeleteProduct: React.FC<DeleteProductProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    const options = {
      method: "DELETE",
    };

    fetch(`http://localhost:3000/products/${props.id}`, options).then(
      (response) => {
        dispatch(removeProductAction(props.id));
      }
    );
  };

  return (
    <Button variant="secondary" onClick={handleDelete}>
      Delete
    </Button>
  );
};
