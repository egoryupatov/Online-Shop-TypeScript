import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface EditProductProps {
  id: number;
}

export const EditProductButton: React.FC<EditProductProps> = (props) => {
  return (
    <td>
      <Link to={`/edit/${props.id}`}>
        <Button variant="secondary">Edit</Button>
      </Link>
    </td>
  );
};
