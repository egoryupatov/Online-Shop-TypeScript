import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from './../store/hooks';

interface EditProductProps {
    id: number;
}

interface Params {
  id: number;
}

export const EditProductButton: React.FC<EditProductProps> = props => {

//не получается

const params = useParams<Params>();
const products = useAppSelector((state) => state.products.list);
const editedProduct = products.find((product) => product.id == params.id)

  return (

    <td>
      <Link to={`/edit/${props.id}`}>
        <Button variant="secondary">Edit</Button>
      </Link>
    </td>
  )
}
