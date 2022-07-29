import {useAppDispatch} from "../../store/hooks";
import {removeProductAction} from "../../store/productsSlice";
import {Button} from "react-bootstrap";
import {deleteProductApi} from "../../api/api-client";
import React from "react";

interface DeleteProductProps {
    productId: number;
}

export const DeleteProduct: React.FC<DeleteProductProps> = (props) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        deleteProductApi({productId: props.productId}).then(() => {
            dispatch(removeProductAction(props.productId))
        })
    };

    return (
        <Button variant="secondary" onClick={handleDelete}>
            Delete
        </Button>
    );
};
