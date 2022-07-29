import {
    DELETE_PRODUCT_START,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_MANY_PRODUCT_START,
    DELETE_MANY_PRODUCT_SUCCESS,
    DELETE_MANY_PRODUCT_FAILURE,
} from "@types/products";

import axios from "@config/axios";

import { closeDialog } from "@actions/products/dialog";

export const deleteProduct = (product) => {
    return async (dispatch) => {
        dispatch(deleteProductStart());

        try {
            await axios.delete(`product/${product._id}`);

            dispatch(deleteProductSuccess(product));
            dispatch(closeDialog());
        } catch (error) {
            dispatch(deleteProductFailure(error.response.data));
        }
    };
};

const deleteProductStart = () => ({
    type: DELETE_PRODUCT_START,
});

const deleteProductSuccess = (product) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: product,
});

const deleteProductFailure = (error) => ({
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
});

export const deleteManyProducts = (selected) => {
    return async (dispatch) => {
        dispatch(deleteManyProductsStart());

        try {
            await axios.delete("product", { data: { selected } });

            dispatch(deleteManyProductsSuccess(selected));
            dispatch(closeDialog());
        } catch (error) {
            dispatch(deleteManyProductsFailure(error.response.data));
        }
    };
};

const deleteManyProductsStart = () => ({
    type: DELETE_MANY_PRODUCT_START,
});

const deleteManyProductsSuccess = (selected) => ({
    type: DELETE_MANY_PRODUCT_SUCCESS,
    payload: selected,
});

const deleteManyProductsFailure = (error) => ({
    type: DELETE_MANY_PRODUCT_FAILURE,
    payload: error,
});
