import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";

interface EditProductProps {
  productId: number;
}

export const EditProductButton: React.FC<EditProductProps> = (props) => {
  return (
    <td>
      <Link to={`/edit/${props.productId}`}>
        <Button variant="secondary">Edit</Button>
      </Link>
    </td>
  );
};
