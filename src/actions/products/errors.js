import { CLEAR_ERROR, CLEAR_ERRORS } from "@types/products";

export const clearError = (error) => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ERROR,
            payload: error,
        });
    };
};

export const clearErrors = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS,
        });
    };
};
