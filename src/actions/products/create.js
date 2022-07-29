import {
    CREATE_PRODUCT_START,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
} from "@types/products";

import axios from "@config/axios";

import { clearAlert } from "@actions/products/alert";
import { clearValues } from "@actions/products/values";
import { closeModal } from "@actions/products/modal";

export const createProduct = (values) => {
    return async (dispatch) => {
        dispatch(createProductStart());

        try {
            const { data } = await axios.post("/product", values);

            dispatch(createProductSuccess(data));
            dispatch(clearValues());
            
            setTimeout(() => {
                dispatch(clearAlert());
                dispatch(closeModal());
            }, 3000);
        } catch (error) {
            dispatch(createProductFailure(error.response.data));
        }
    };
};

const createProductStart = () => ({
    type: CREATE_PRODUCT_START,
});

const createProductSuccess = (data) => ({
    type: CREATE_PRODUCT_SUCCESS,
    payload: {
        product: data.product,
        alert: data.alert,
    },
});

const createProductFailure = (data) => ({
    type: CREATE_PRODUCT_FAILURE,
    payload: {
        errors: data.errors,
        alert: data.alert,
    },
});
