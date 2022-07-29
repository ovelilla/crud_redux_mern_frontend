import { SET_PRODUCT, CLEAR_PRODUCT } from "@types/products";

export const setProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: SET_PRODUCT,
            payload: product,
        });
    };
};

export const clearProduct = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_PRODUCT,
        });
    };
};
