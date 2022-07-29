import {
    UPDATE_PRODUCT_START,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
} from "@types/products";

import axios from "@config/axios";

import { clearAlert } from "@actions/products/alert";
import { clearValues } from "@actions/products/values";
import { closeModal } from "@actions/products/modal";

export const updateProduct = (product, values) => {
    return async (dispatch) => {
        dispatch(updateProductStart());

        try {
            const { data } = await axios.put(`/product/${product._id}`, values);

            dispatch(updateProductSuccess(data));
            dispatch(clearValues());
            
            setTimeout(() => {
                dispatch(clearAlert());
                dispatch(closeModal());
            }, 3000);
        } catch (error) {
            dispatch(updateProductFailure(error.response.data));
        }
    };
};

const updateProductStart = () => ({
    type: UPDATE_PRODUCT_START,
});

const updateProductSuccess = (data) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: {
        product: data.product,
        alert: data.alert,
    },
});

const updateProductFailure = (data) => ({
    type: UPDATE_PRODUCT_FAILURE,
    payload: {
        errors: data.errors,
        alert: data.alert,
    },
});
