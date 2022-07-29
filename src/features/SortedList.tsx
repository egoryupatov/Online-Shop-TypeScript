import { DeleteProduct } from "../screens/delete-product/DeleteProduct";
import { EditProductButton } from "./EditProductButton";
import { Product } from "./../store/productsSlice";

interface SortedListProps {
  products: Product[];
}

export const SortedList: React.FC<SortedListProps> = (props) => {
  return (
    <tbody>
      {props.products.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>${product.price}</td>
          <td>{product.stock}</td>
          <td>
            <DeleteProduct productId={product.id} />
          </td>
          <td>
            <EditProductButton productId={product.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};
