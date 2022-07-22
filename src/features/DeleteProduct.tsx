import { useAppDispatch } from "../store/hooks";
import { removeProduct } from "../store/productsSlice";
import { Button } from "react-bootstrap";

interface DeleteProductProps {
    id: number;
}

export const DeleteProduct: React.FC<DeleteProductProps> = props => {

  const dispatch = useAppDispatch();

    //исправить на правильный эвент
    
  const handleDelete = (event: any) => {

    event.preventDefault()

    const options = {
        method: 'DELETE',
      }

    fetch(`http://localhost:3000/products/${props.id}`, options)
      .then((response) => {
        dispatch(removeProduct(props.id));
      });
  };

  return (

    <Button variant="secondary" onClick={handleDelete}>Delete</Button>
    
  );
};
