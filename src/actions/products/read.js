import { READ_PRODUCTS_START, READ_PRODUCTS_SUCCESS, READ_PRODUCTS_FAILURE } from "@types/products";

import axios from "@config/axios";

export const readProducts = () => {
    return async (dispatch) => {
        dispatch(readProductsStart());

        try {
            const { data } = await axios.get("/product");

            dispatch(readProductsSuccess(data));
        } catch (error) {
            dispatch(readProductsFailure(error.response.data));
        }
    };
};

const readProductsStart = () => ({
    type: READ_PRODUCTS_START,
});

const readProductsSuccess = (data) => ({
    type: READ_PRODUCTS_SUCCESS,
    payload: {
        products: data,
    },
});

const readProductsFailure = (error) => ({
    type: READ_PRODUCTS_FAILURE,
    payload: error,
});
